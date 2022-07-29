import {Request, Response} from "express"
import { container } from "tsyringe"
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase"

class CreateSpecificationController {

    handle(request: Request, response: Response){
        const {name, description} = request.body
        const createSpecificationUseCate = container.resolve(CreateSpecificationUseCase)
        createSpecificationUseCate.execute({name, description})

        return response.status(201).send()

    }
}

export {CreateSpecificationController}