import React from "react";
import style from './Posts.module.css';
import state from '../../../state'
import Post from "./Post/Post";

let postElement = state.homepage.posts.map(post => <Post img={post.img} user={post.user} time={post.time} message={post.message} like={post.like} like_img={post.like_btn} dislike_img={post.dislike_btn}/>)

const Posts = () => {
  return (
      <div className={style.allPosts}>
          {postElement}
      </div>
  )
}

export default Posts