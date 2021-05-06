const { exec } = require('child_process');
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//Get all posts
router.get('/', async(req,res)=>{
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(error){
       res.json({message:error.message})
    }
});

//Gets a specific post
router.get('/:postId', async(req,res)=>{
    try{
     const  post = await Post.findById({_id:req.params.postId})
     res.json(post)

    }catch(error){
        res.json({message:error.message})
    }
})

//Submits a post
router.post('/',async (req, res)=>{
    const post = new Post({
        title:req.body.title,
        summary:req.body.summary
    })
    try{
     const savedPost = await post.save()
     res.json(savedPost)
    }catch(error){
      res.json({message:error.message})
    }
} );

//Delete a post

router.delete('/:postId',async(req,res)=>{
    try{
       const removedPost = await Post.remove({_id:req.params.postId})
       res.json(removedPost)
    }catch(error){
        res.json({message:error.message})
    }
});

//Edit or update post

router.patch('/:postId', async(req, res)=>{
    try{
      const updatedPost = await Post.updateOne({_id:req.params.postId},{$set:{title:req.body.title}})
      res.json(updatedPost)
    }catch(error){
     res.json({message:error.message})
    }
})


module.exports = router;
