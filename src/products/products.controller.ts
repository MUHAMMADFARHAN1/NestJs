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

@Controller('products')
export class ProductsController {
  @Get()
  findAll() {
    return 'There are products in the System';
  }
}
