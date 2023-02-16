const Post = require('../models/post')
const Comment = require('../models/comment')
exports.create = async (req, res) => {
  const post = await Post.findById(req.params.id)
  console.log(req.user.id)
  console.log(req.params.id)
  if (!post) return res.status(404).json('post not exist')
  try {
    if(!req.params.id) return res.status(400).json('bad request')
    const comment = await Comment.create({
      comment: req.body.comment,
      post: req.params.id,
      user: req.user.id
    });

    post.comments.push(comment)
    await post.save()
    res.status(201).json(comment)

  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}