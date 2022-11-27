import React from "react";
import style from './Home.module.css';
import Posts from "./Posts/Posts";
import CreatePost from "./Posts/CreatePost/CreatePost";

const Home = (props) => {
    return (
        <div className={style.home}>
            <CreatePost forCreatePost={props.forHome}/>
            <Posts/>
        </div>
    )
}

export  default  Home