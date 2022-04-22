import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assds/images/images.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Peginator";
import User from "./User";

let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
