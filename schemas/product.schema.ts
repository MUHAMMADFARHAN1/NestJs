import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Collection, HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

//https://github.com/nestjs/nest/blob/master/sample/01-cats-app/src/cats/dto/create-cat.dto.ts

@Schema({ collection: 'Products' })
export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop()
  createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

// import mongoose from 'mongoose';

// export const productSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     quantity: {
//       type: Number,
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// export interface Product extends mongoose.Document {
//   name: string;
//   description: string;
//   price: number;
//   quantity: number;
//   createdAt: Date;
// }

//https://dev.to/manthanank/building-a-crud-application-with-nestjs-and-mongodb-52o2
