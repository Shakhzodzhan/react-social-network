import React from 'react';
import module from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElement = props.posts.map(function (item) {
        return <Post text={item.text}/>
    });

    let newElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newElement.current.value;
        props.updateNewPostText(text);
    };


    return (
        <div className={module.content}>
            <div className={module.posts}>
                <h1>
                    My Posts
                </h1>
                <div>
                    <textarea ref={newElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                {postsElement}
                {/*<Post text='How are you?'/>*/}
                {/*<Post text='Good, and you?'/>*/}
                {/*<Post text='WTF???'/>*/}
                {/*<Post text='going dawn'/>*/}
            </div>
        </div>
    )
};
export default MyPosts;
