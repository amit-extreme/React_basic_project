import React from 'react';

const Avtarlist = (props) => {
  return  <div className="avtar_style">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"></img>
        <h1 className="tc">{props.name}</h1>
        <p>{props.work}</p>
    </div>
}

export default Avtarlist;