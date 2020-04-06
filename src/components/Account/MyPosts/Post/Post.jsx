import React from 'react';
import module from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={module.item}>
                <img src="https://sun9-48.userapi.com/c858424/v858424322/13a026/AYypPji8ysE.jpg?ava=1"/>
                { props.text }
            </div>
        </div>
    )
}

export default Post;
