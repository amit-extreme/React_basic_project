import React from 'react';

const AvatarComponent = (props) => {
  return  <div className="avtar_style">
        <img src={`https://joeschmoe.io/api/v1/${props.user.name}`} alt="Avatar"></img>
    </div>
}
export default AvatarComponent;