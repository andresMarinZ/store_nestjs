import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrudctsController } from './controllers/prudcts.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products/products.service';

@Module({
  imports: [],
  controllers: [AppController, PrudctsController, CategoriesController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
