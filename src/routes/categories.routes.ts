import { Router } from "express";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/createCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoryController } from "../modules/cars/useCases/listCategory/ListCategoryController";
import multer from "multer";

const categoriesRoutes = Router()

const upload = multer({dest: './tmp'})

const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()
const listCategoryController = new ListCategoryController()

categoriesRoutes.post('/', createCategoryController.handle)

categoriesRoutes.post('/import', upload.single("file") , importCategoryController.handle)

categoriesRoutes.get('/', listCategoryController.handle)

export  {categoriesRoutes }