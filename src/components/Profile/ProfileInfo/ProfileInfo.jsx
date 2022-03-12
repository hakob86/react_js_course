import React from "react";
import Preloader from "../../common/Preloader/Preloader";

import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKHPsvNDJHY9tWpkHrfkfo8Dkf0LvZU3Hdg&usqp=CAU" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} /> ava + description
            </div>
        </div>
    );
};
export default ProfileInfo;
