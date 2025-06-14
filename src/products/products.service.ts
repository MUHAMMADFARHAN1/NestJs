import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './../../dto/create-product.dto';
import { UpdateProductDto } from './../../dto/update-product.dto';
import { Product } from './../../schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly ProductModel: Model<Product>,
  ) {}

  //   async create(createProductDto: CreateProductDto): Promise<Product> {
  //     const createdProduct = await this.ProductModel.create(createProductDto);
  //     return createdProduct;
  //   }

  async findAll(): Promise<Product[]> {
    return this.ProductModel.find().exec();
  }

  //   async findOne(id: string): Promise<Product> {
  //     return this.ProductModel.findOne({ _id: id }).exec();
  //   }

  //   async update(
  //     id: string,
  //     updateProductDto: UpdateProductDto,
  //   ): Promise<Product> {
  //     return this.ProductModel.findByIdAndUpdate({ _id: id }, updateProductDto, {
  //       new: true,
  //     }).exec();
  //   }

  //   async delete(id: string): Promise<Product> {
  //     const deletedProduct = await this.ProductModel.findByIdAndDelete({
  //       _id: id,
  //     }).exec();
  //     return deletedProduct;
  //   }
}
