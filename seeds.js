const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();
// unten dann Kurzform
require('dotenv').config();
mongoose.connect(process.env.MONGOURL, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true
});
​const Post = require('./Post');
​(async () => {
    if (!(process.argv.includes('--delete'))) {
        const found = await Post.find();
​
        if (found.length === 0) {
            const postData = [{
                    title: "Post #1",
                    author: "abba",
                    body: "sbg<dg.ai"
                },
                {
                    title: "Post #2",
                    author: "beta",
                    body: "dklghoöswvgh<s"
                },
                {
                    title: "Post #3",
                    author: "caesar",
                    body: "ldöbndyfbohn"
                },
            ];
            const createdPost = await Post.insertMany(postData);
            console.log(createdPost);
        }
        console.log('exit');
        process.exit();
    } else {
        const result = await Post.deleteMany();
        console.log(result);
        process.exit();
​
    }
})();