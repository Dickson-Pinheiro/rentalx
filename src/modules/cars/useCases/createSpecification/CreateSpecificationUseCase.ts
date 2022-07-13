import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {

    constructor(private specificationsRepository: ISpecificationsRepository){

    }
    execute({name, description}: IRequest): void {

        const specificationAlreadyExists = this.specificationsRepository.findByname(name)

        if(specificationAlreadyExists){
            throw new Error("Specitication already exists");
        }

        this.specificationsRepository.create({name, description})
    }

    
}

export {CreateSpecificationUseCase}