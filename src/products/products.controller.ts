import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { Product, ProductSchema } from './../../schemas/product.schema';
import { CreateProductDto } from './../../dto/create-product.dto';
import { UpdateProductDto } from './../../dto/update-product.dto';
import { ProductsService } from './products.service';

type ProductParams = { id: string };

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Post()
  // async create(@Body() createCatDto: CreateProductDto) {
  //   return this.catsService.create(createCatDto);
  // }
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  // @Get()
  // findAll() {
  //   return 'There are products in the System';
  // }

  // @Post()
  // postOne() {
  //   return 'There are products in the System';
  // }

  // @Put()
  // putOne() {
  //   return 'There are puts in the System';
  // }

  // @Get(':id')
  // findOne(@Param() params: ProductParams) {
  //   let { id } = params;
  //   return `Fetching the product ${id}`;
  // }

  // @Delete()
  // DeleteOne() {
  //   return 'There are deletes in the System';
  // }
}
