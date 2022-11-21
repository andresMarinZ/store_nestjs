import { ProductsService } from '../services/products/products.service';
import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('products')
export class PrudctsController {
  constructor(private productsService: ProductsService) {}

  @Get('filter')
  getProductFilter() {
    return {
      message: `Soy un filtere`,
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: string) {
    // return {
    //   message: `product ${productId}`,
    // };
    return this.productsService.findOne(+productId);
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: this.productsService.findAll();
    // };
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.productsService.remove(+id);
  }
}
