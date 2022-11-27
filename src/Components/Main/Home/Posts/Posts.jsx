import React from "react";
import style from './Posts.module.css';
import state from '../../../state'
import Post from "./Post/Post";

let postElement = state.posts.map(post => <Post img={post.img} user={post.user} time={post.time} message={post.message}/>)

const Posts = (props) => {
  return (
      <div className={style.allPosts}>
          {postElement}
      </div>
  )
}

export default Posts