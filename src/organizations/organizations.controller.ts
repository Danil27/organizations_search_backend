import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { OrganizationsService } from './organizations.service';

@ApiTags('Organizations')
@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get(':inn')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
  })
  async find(@Param('inn') inn: string) {
    return await this.organizationsService.getOrgn(inn);
  }
}
