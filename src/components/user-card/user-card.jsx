import React from "react";
import "./user-card.scss";

export const UserCard = ({ imgUrl, name, cancel, id, removeUser }) => {
  return (
    <div className='chip'>
      <img
        src='./christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
        alt='Person'
        width='96'
        height='96'
      />
      {name}
      <span
        className='closebtn'
        onClick={() => {
          removeUser(id)
        }}>
        &times;
      </span>
    </div>
  );
};
