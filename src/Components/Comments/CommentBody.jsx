import React from "react";
import Comment from "./Comment";

const CommentBody = () => {
  const dummyArray = [
    {
      username: "sahil.1si18ec083",
      value: "hi nice post Sk",
      time: 13,
    },
    {
      username: "sahil.1si18ec083",
      value: "hi nice post Sk",
      time: 1,
    },
    {
      username: "sahil.1si18ec083",
      value: "Hi this is a new comment",
      time: 1,
    },
    {
      username: "sahil.1si18ec083",
      value: "This is a 4th comment",
      time: 1,
    },
  ];
  return (
    <div className="comment-body">
      {dummyArray.map((item, index) => (
        <Comment
          commentValue={item?.value}
          username={item?.username}
          commentmadeago={item?.time}
        />
      ))}
    </div>
  );
};

export default CommentBody;
