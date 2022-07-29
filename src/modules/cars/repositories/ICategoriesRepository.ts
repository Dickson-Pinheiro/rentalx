import { Category } from "../entities/Category";

interface IcreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Category>
    create({name, description}: IcreateCategoryDTO): Promise<void>
    list(): Promise<Category[]>
}

export {IcreateCategoryDTO, ICategoriesRepository }