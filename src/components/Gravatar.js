import React from 'react';
import md5 from 'md5';

function Gravatar(props) {
  const email = props.email;
  const hash = email ? md5(email) : 'default';

  return (
    <img
      className="Badge__avatar"
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  );

}

export default Gravatar;