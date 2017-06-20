import React from 'react';
let demoUserSrc = require('./../vendor/icons/demoUser0.png');
let demoUserName = 'DemoUser #0';

const UserAvatar = () => {
  return (
    <div class="avatar-wrapper">
      <img class="avatar-image" src={demoUserSrc} alt={demoUserName}/>
      <div class="avatar-name">{demoUserName}</div>
    </div>
  );
};

export default UserAvatar;
