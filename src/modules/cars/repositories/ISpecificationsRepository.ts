import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({name, description}: ICreateSpecificationDTO): void
    findByname(name: string): Specification;
    list(): Specification[]
}

export {ISpecificationsRepository, ICreateSpecificationDTO}