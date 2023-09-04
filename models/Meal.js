import mongoose from "mongoose";
const MealSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 5,
  },
  desc:{
    type: String,
    required: true,
    min: 20,
  },
  category:{
    type: String,
    required: true,
    enum:["pizza","spaghetti","vegetrian","gyrous","burger"]
  },
  price:{
    type:Number,
    required:true,

  },
  image:{
    type: String,
    required: true,
  },
  featured:{
    type:Boolean,
    default:false
  }
},{timestamps:true});
export default mongoose.models ?.Meal || mongoose.model("Meal",MealSchema)
