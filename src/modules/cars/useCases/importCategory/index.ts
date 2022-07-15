import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryUsecase } from "./importCategoryUseCase";
import { ImportCategoryController } from "./ImportCategoryController";

const categoriesRepository = CategoriesRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUsecase(categoriesRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export {importCategoryController}