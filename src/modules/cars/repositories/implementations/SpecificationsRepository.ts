import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository{

    private specifications: Specification[]

    private static INSTANCE: SpecificationsRepository

    constructor(){
        this.specifications = []
    }

    public static getInstance(){
        if(!this.INSTANCE){
            this.INSTANCE = new SpecificationsRepository()
        }
        return this.INSTANCE;
    }


    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification()
        Object.assign(specification,
            {
                name,
                description,
                created_at: new Date()
            }
        )

        this.specifications.push(specification)
    }

    findByname(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name)

        return specification;
    }

    list(): Specification[] {
        return this.specifications;
    }
 }


export {SpecificationsRepository}