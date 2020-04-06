import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/accountReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.accountPage.posts,
        newPostText: state.accountPage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            let action = updatePostTextActionCreator(text);
            dispatch(action)
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
