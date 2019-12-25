import {Schema} from 'mongoose'

const blogSchema = new Schema({
    title: {
        type:String,
        require: [true,'Blog needs Title'],
        unique: true
    },
    author: {
        type:String,
        require: [true,'Blog needs Author']
    },
    body: {
        type:String,
        require: [true,'Blog needs Body']
    },
    comments: [{
        body: String,
        date: Date,
    }],
    date: {
        type:Date,
        require: [true,'Blog needs Date'],
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
