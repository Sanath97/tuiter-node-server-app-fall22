import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   tuit: String,
                                   likes: Number,
                                   liked: Boolean,
                                   image: String,
                                   dislikes: Number,
                                   disliked: Boolean,
                                   userName: String,
                                   handle: String
                               }, {collection: 'tuits'});
export default schema;

