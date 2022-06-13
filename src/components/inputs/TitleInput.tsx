import React, { useState } from 'react';
import { InputProps } from '../../types/todo';
import { useAction } from '../../hooks/useAction';
import "../styles/TitleInput.css";

const TitleInput: React.FC<InputProps> = (props) => {

  const { id, value, star, done, date } = props;
  const [title, setTitle] = useState(value);
  const { updStarred } = useAction();

  return (
    <>
      <input className="input" autoFocus={true} type="text" value={title} onChange={(e) => setTitle(e.target.value)}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            updStarred(id, title, star, done, false, date);
          }
        }} />
    </>
  );
}

export default TitleInput;