require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
mongoose.connect(process.env.MONGOURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const Post = require("./Post");
//CREATE
app.post('/', async (req, res) => {
  const post = await Post.create(req.body)
  res.json(post)
});
//READ all
app.get('/', async (req, res) => {
  const posts = await Post.find()
  res.json(posts)
});
//READ single
app.get('/:post_id', async (req, res) => {
  const post = await Post.findById(req.params.post_id)
  res.json(post)
});
//UPDATE
app.put('/:post_id', async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.post_id, req.body)
  res.json(post)
});
//DELETE
app.delete('/:post_id', async (req, res) => {
  await Post.findByIdAndRemove(req.params.post_id)
  res.json(`Post #${req.params.post_id} deleted`)
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))