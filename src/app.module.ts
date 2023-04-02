import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import * as Joi from 'joi';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string(),
      }),
    }),
    OrganizationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
