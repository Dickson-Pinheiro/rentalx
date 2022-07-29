import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import fs from 'fs'
import {parse} from 'csv-parse'
import { inject, injectable } from "tsyringe";

interface IImportCategory {
    name: string;
    description: string;
}

@injectable()
class ImportCategoryUsecase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: CategoriesRepository){}

    loadCategoies(file: Express.Multer.File): Promise<IImportCategory[]>{
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)
            const categories: IImportCategory[] =[]
    
            const parseFile = parse()
    
            stream.pipe(parseFile)
    
            parseFile.on("data", async(line) => {
                const [name, description] = line;
                const category: IImportCategory = {name, description}
                categories.push(category);
            }).on("end", ()=> {
                fs.promises.unlink(file.path)
                resolve(categories)
            }).on("error", (err) => {
                reject(err)
            })
        })
    }

    async execute(file: Express.Multer.File): Promise<void>{
        const categories: IImportCategory[] = await this.loadCategoies(file)

        categories.map(async category => {
            const {name, description} = category

            const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

            if(!categoryAlreadyExists){
                await this.categoriesRepository.create({name, description});
            }

        })
    }
}

export {ImportCategoryUsecase}