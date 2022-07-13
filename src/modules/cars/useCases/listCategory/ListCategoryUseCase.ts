import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository){

    }

    execute(){
        return this.categoriesRepository.list()
    }
}

export {ListCategoryUseCase}