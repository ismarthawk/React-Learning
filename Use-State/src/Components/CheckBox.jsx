import React from 'react';
import { useState } from 'react';

export default function CheckBox() {
  const [liked, setLiked] = useState(true);

  const handleChange = (e) => {
    setLiked(e.target.checked);
  };

  return (
    <>
      <input type="checkbox" checked={liked} onChange={handleChange} />
      {liked ? (
        <>
          <p>You Liked This.</p>
        </>
      ) : (
        <>
          <p>You did not like this.</p>
        </>
      )}
    </>
  );
}
