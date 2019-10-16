const mongoose = require('mongoose'),
Schema = mongoose.Schema;
​
const blogSchema = new Schema ({
    title: String,
    author: String,
    body: String,        
});
​
​
module.exports = mongoose.model('Post', blogSchema);