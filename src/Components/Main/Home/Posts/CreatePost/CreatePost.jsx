import React from "react";
import style from './CreatePost.module.css'

const CreatePost = (props) => {
  return (
      <div className={style.createPost}>
          <div className={style.textArea}>
              <header>
                  <img src={props.forCreatePost.header.profile_img} alt="newPostProfileImg"/>
                  <div>{props.forCreatePost.newpost.header}{props.forCreatePost.header.user}?</div>
              </header>
              <textarea name="" id=""></textarea>
          </div>
          <button>{props.forCreatePost.newpost.button}</button>
      </div>
  )
}

export default CreatePost