import React from "react";
import MyPosts from "./MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};
export default Profile;
