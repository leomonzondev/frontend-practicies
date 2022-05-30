import { Schema, model, models } from 'mongoose'

// const infoProduct = new mongoose.Schema(
//   {
//     ml: { type: String, required: true},
//     principal: { type: String, required: true},
//     efecto: { type: String, required: true},
//     contiene: { type: String, required: true},
//     indicaciones: { type: String, required: true},
//   }
// )

const productSchema = new Schema(
  {
    id: { type: Number, required:true},
    title: { type: String, required: true },
    category: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },

  },
  {
    timestamps: true,
    versionKey: false
  }
);


export default models.Product || model('Product', productSchema);