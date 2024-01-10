import mongoose from "mongoose";
const { Schema } = mongoose;

const newsSchema = new Schema({
  uri: {
    type: String,
    unique: true,
  },
  lang: {
    type: String,
  },
  isDuplicate: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  dateTime: {
    type: Date,
  },
  dateTimePub: {
    type: Date,
  },
  dataType: {
    type: String,
  },
  sim: {
    type: Number,
    default: 0,
  },
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  source: {
    uri: {
      type: String,
      },
    dataType: {
      type: String,
      },
    title: {
      type: String,
      },
    location: {
        label:{
            eng:{
                type:String,
            },
        },
        lat:{
            type:Number,
        },
        long:{
            type:Number,
        },
        type:{
            type:String,
        }
    },
    locationValidated: {
      type: Boolean,
      default: true,
    },
  },
  authors: {
    type: [String],
    default: [],
  },
  image: {
    type: String,
  },
  eventUri: {
    type: String,
  },
  location: {
    type: String,
  },
  sentiment: {
    type: Number,
    default: 0,
  },
});

const News = mongoose.models.News || mongoose.model("News", newsSchema);

export default News;
