import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ConfigModule } from '@nestjs/config';
//import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
