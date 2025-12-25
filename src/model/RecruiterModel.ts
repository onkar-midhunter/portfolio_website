import mongoose, { Schema, Document, Model } from "mongoose"

export interface Recruiter extends Document {
  recName: string
  recMessage:string
  recEmail: string
}

const RecruiterSchema = new Schema<Recruiter>(
  {
    recName: {
      type: String,
      required: [true, "userName is required"],
      trim: true,
      
    },
    recMessage:{
      type:String,

    },
    recEmail: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+\@.+\..+/, "Please use a valid email address"],
    },
  },
  { timestamps: true }
)

const RecruiterModel: Model<Recruiter> =
  (mongoose.models.Recruiter as Model<Recruiter>) ||
  mongoose.model<Recruiter>("Recruiter", RecruiterSchema)

export default RecruiterModel