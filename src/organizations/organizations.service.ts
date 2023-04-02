import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { PrismaService } from '../prisma/prisma.service';
import { OrganizationType } from './types/organization.type';

@Injectable()
export class OrganizationsService {
  private readonly api_key: string;

  constructor(
    private readonly prismaService: PrismaService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.api_key = this.configService.get<string>('api_key');
  }
  public async getOrgn(inn: string): Promise<OrganizationType[]> {
    const res = await this.findOrgsInDB(inn);
    if (res.length) {
      return res;
    } else {
      return await this.findByReg(inn);
    }
  }

  private async createMany(orgs: OrganizationType[]) {
    await this.prismaService.organizations.createMany({
      data: orgs,
    });
  }

  private async findOrgsInDB(inn: string): Promise<OrganizationType[]> {
    return await this.prismaService.organizations.findMany({
      where: {
        inn,
      },
    });
  }

  private async findByReg(inn: string) {
    const { data } = await this.httpService.axiosRef.post(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party',
      {
        query: inn,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Token ${this.api_key}`,
        },
      },
    );

    if (data) {
      const res = data.suggestions.map((o) => {
        return { inn: o.data.inn, name: o.value };
      }) as OrganizationType[];
      await this.createMany(res);
      return res;
    }
  }
}
