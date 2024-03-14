import { Schema, model } from 'mongoose'
import { Category, CategoryModel } from '../types/category.type'

const Categories = new Schema<Category, CategoryModel>({
  //Aqui  se definen los campos de la base de datos para el modelo "Categorias"
  //Nombre
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true
  },
  //Descripcion
  description: {
    type: String,
    required: false,
    trim: true
  }
  //TODO: Meter la categoria del anime
})

export default model('Category', Categories)
