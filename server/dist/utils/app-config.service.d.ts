import { ConfigService } from '@nestjs/config';
export type AppEnv = 'test' | 'local' | 'development' | 'review' | 'production';
export declare class AppConfigService {
    private readonly configService;
    constructor(configService: ConfigService);
    get assetsDir(): string;
    get port(): string;
    get appEnv(): AppEnv;
    get clientUri(): string;
    get serverUri(): string;
    get databaseConnectionString(): string;
}
