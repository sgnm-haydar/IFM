/// <reference types="mongoose/types/PipelineStage" />
/// <reference types="mongoose/types/Error" />
/// <reference types="mongoose/types/Connection" />
import { Model } from 'mongoose';
import { Neo4jService } from 'nest-neo4j/dist';
import { PaginationParams } from 'src/common/commonDto/pagination.dto';
import { BaseInterfaceRepository } from 'src/common/repositories/crud.repository.interface';
import { CreateClassificationDto } from '../dto/create-classification.dto';
import { UpdateClassificationDto } from '../dto/update-classification.dto';
import { Classification } from '../entities/classification.entity';
export declare class ClassificationRepository implements BaseInterfaceRepository<Classification> {
    private readonly neo4jService;
    private readonly classificationModel;
    constructor(neo4jService: Neo4jService, classificationModel: Model<Classification>);
    findWithRelations(relations: any): Promise<Classification[]>;
    findOneById(id: string): Promise<{
        root: any;
    }>;
    getHello(): Promise<any>;
    findAll(data: PaginationParams): Promise<any[]>;
    create(createClassificationDto: CreateClassificationDto): Promise<Classification>;
    update(_id: string, updateClassificationto: UpdateClassificationDto): Promise<import("mongoose").Document<unknown, any, Classification> & Classification & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(_id: string): Promise<any>;
}
