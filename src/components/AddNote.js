import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [text, setText] = useState("");
  let CharacterLimit = 200;

  const handleSaveClick = () => {
    if (text.trim().length) {
      handleAddNote(text.trim());
      setText("");
    }
  };
  const ctrlPlusEnter = (e) => {
    if (e.ctrlKey && e.keyCode === 13) {
      handleSaveClick();
    }
  };

  const titleText = text.length
    ? `your text is: ${text}`
    : "Write some notes...";

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder={`Type to add a note...






save with CTRL+ENTER`}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => ctrlPlusEnter(e)}
        value={text}
        maxLength={CharacterLimit}
        title={titleText}
      ></textarea>
      <div className="note-footer">
        <small title={`${CharacterLimit - text.length} Remaining`}>
          {CharacterLimit - text.length} Remaining
        </small>
        <button
          title={
            text.trim().length
              ? "Save your note:)"
              : "Please write your note first"
          }
          onClick={handleSaveClick}
          className="save"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
