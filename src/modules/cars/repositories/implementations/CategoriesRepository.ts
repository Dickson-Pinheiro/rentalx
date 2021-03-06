import { Category } from "../../model/Category";
import { ICategoriesRepository, IcreateCategoryDTO } from "../ICategoriesRepository";



class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];
    private static INSTANCE: CategoriesRepository;

    private constructor(){
        this.categories = []
    }

    public static getInstance(){
        if(!this.INSTANCE){
            this.INSTANCE = new CategoriesRepository()
            return this.INSTANCE
        }
        return this.INSTANCE;
    }

    create({name, description}: IcreateCategoryDTO): void {

    const category = new Category()
    
    Object.assign(category, {
        name,
        description,
        created_at: new Date()
    })
    
    this.categories.push(category)
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(category => category.name === name)
        return category;
    }

}

export { CategoriesRepository }