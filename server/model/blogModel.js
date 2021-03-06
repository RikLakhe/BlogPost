import mongoose, {Schema} from 'mongoose'

const blogSchema = new Schema({
    title: {
        type:String,
        unique: [true,'Blog needs to have unique title'],
        required: [true,'Blog needs Title']
    },
    author: {
        type:String,
        required: [true,'Blog needs Author']
    },
    author_id: {
        type:String,
        required: [true,'Blog needs Author']
    },
    body: {
        type:String,
        required: [true,'Blog needs Body']
    },
    comments: { type:'array' },
    date: {
        type:Date,
        required: [true,'Blog needs Date'],
        default: Date.now
    },
    hidden: {
      type: Boolean,
      default: false
    },
    meta:{
        votes: Number,
        favs: Number
    }
});

export default mongoose.model("Blog",blogSchema);