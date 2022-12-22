import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/models/user.model';
import { TokenModule } from './token/token.module';
import { AuthModule } from './auth/auth.module';
import { WatchlistModule } from './watchlist/watchlist.module';
import { Watchlist } from './watchlist/models/watchlist.model';

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
      models: [User, Watchlist]

    })
  }),
  UserModule,
  TokenModule,
  AuthModule,
  WatchlistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
