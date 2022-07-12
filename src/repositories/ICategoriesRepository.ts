import { Category } from "../model/Category";

interface IcreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category | undefined
    create({name, description}: IcreateCategoryDTO): void
    list(): Category[]
}

export {IcreateCategoryDTO, ICategoriesRepository }