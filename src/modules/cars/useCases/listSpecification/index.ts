import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { ListSpecificationController } from "./ListSpecificationController";

const specificationsRepository = SpecificationsRepository.getInstance()
const listSpecificationUseCate = new ListSpecificationUseCase(specificationsRepository)
const listSpecificationController = new ListSpecificationController(listSpecificationUseCate)

export {listSpecificationController}