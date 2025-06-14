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

type ProductParams = { id: string };

@Controller('products')
export class ProductsController {
  @Get()
  findAll() {
    return 'There are products in the System';
  }

  @Post()
  postOne() {
    return 'There are products in the System';
  }

  @Get(':id')
  findOne(@Param() params: ProductParams) {
    let { id } = params;
    return `Fetching the product ${id}`;
  }

  @Delete()
  DeleteOne() {
    return 'There are deletes in the System';
  }
}
