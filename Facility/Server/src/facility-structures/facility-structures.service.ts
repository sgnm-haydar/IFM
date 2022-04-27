import { Inject, Injectable } from '@nestjs/common';
import { RepositoryEnums } from 'src/common/const/repository.enum';
import { BaseGraphDatabaseInterfaceRepository } from 'ifmcommon';
import { CreateFacilityStructureDto } from './dto/create-facility-structure.dto';
import { UpdateFacilityStructureDto } from './dto/update-facility-structure.dto';

@Injectable()
export class FacilityStructuresService {
  constructor(
    @Inject(RepositoryEnums.FACILITY_STRUCTURE)
    private readonly facilityStructureRepository: BaseGraphDatabaseInterfaceRepository<any>,
  ) {}
  create(createFacilityStructureDto: CreateFacilityStructureDto) {
    return this.facilityStructureRepository.create(createFacilityStructureDto);
  }

  async findAll(queryParams) {
    return await this.facilityStructureRepository.findAll(queryParams);
  }

  findOne(id: string) {
    return this.facilityStructureRepository.findOneById(id);
  }

  update(id: string, updateFacilityStructureDto: UpdateFacilityStructureDto) {
    return this.facilityStructureRepository.update(id, updateFacilityStructureDto);
  }

  remove(id: string) {
    return this.facilityStructureRepository.delete(id);
  }


  async changeNodeBranch(id: string, target_parent_id: string) {
    return await this.facilityStructureRepository.changeNodeBranch(id, target_parent_id);
  }

  async findOneNode(key: string) {
    //checkObjectIddİsValid(id);
    return await this.facilityStructureRepository.findOneNodeByKey(key);
  }
}
