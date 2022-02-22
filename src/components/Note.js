import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";

const Note = ({ note, deleteNote, handleIsLike }) => {
  const { id, text, date, isLike } = note;
  const isLikeTrue = isLike ? "red" : "black";
  const textForLike = isLike ? "Do not you like this?" : "Do you like this?";

  const handleDelete = () => {
    const check = window.confirm(`Are you sure to delete the "${text}"?`);
    if (check) {
      deleteNote(id);
    } else {
      return;
    }
  };
  const handleLike = () => {
    handleIsLike(!isLike, id);
  };

  return (
    <div title="Your note" className="note">
      <span className="text-with-heart">
        <span title={`your text is: "${text}"`}>{text}</span>
        <BsFillHeartFill
          onClick={handleLike}
          style={{ color: isLikeTrue }}
          title={textForLike}
        />
      </span>
      <div className="note-footer">
        <small title={date}>{date}</small>
        <MdDeleteForever
          onClick={handleDelete}
          title={`Do you want to delete the "${text}"?`}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
