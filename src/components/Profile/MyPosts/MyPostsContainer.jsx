import React from "react";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};
const mapDispachToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispachToProps)(MyPosts);

export default MyPostsContainer;
