import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380" />
      {props.massage}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};
export default Post;
