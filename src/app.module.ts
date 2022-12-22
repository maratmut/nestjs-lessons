import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/models/user.model';
import { TokenModule } from './token/token.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],

    useFactory: () => ({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "vfhf1982n",
      database: "postgres",
      synchronize: true,
      autoLoadModels: true,
      models: [User]

    })
  }),
  UserModule,
  TokenModule,
  AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
