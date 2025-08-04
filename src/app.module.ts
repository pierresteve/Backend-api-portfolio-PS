import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ContactModule } from './contact/application/contact.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from './mikro-orm.config';


@Module({
  imports: [    
    MikroOrmModule.forRoot(mikroOrmConfig),
    ConfigModule.forRoot({
    isGlobal: true,
  }),
    ContactModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
