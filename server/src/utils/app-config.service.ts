import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export type AppEnv = 'test' | 'local' | 'development' | 'review' | 'production';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get assetsDir(): string {
    return `${__dirname}/../../assets`;
  }

  get port(): string {
    return this.configService.get<string>('PORT', '3000');
  }

  get appEnv(): AppEnv {
    return this.configService.get<AppEnv>('APP_ENV', 'local');
  }

  get clientUri(): string {
    return this.configService.getOrThrow<string>('CLIENT_URI');
  }

  get serverUri(): string {
    return this.configService.getOrThrow<string>('SERVER_URI');
  }

  get databaseConnectionString(): string {
    return this.configService.getOrThrow<string>('DATABASE_CONNECTION_STRING');
  }
}
