import React from 'react';

function ContactCard(props){
  return (
    <div>
      <img src={props.contact.img}></img>
      <h3>{props.contact.heading}</h3>
      <p>{props.contact.details}</p>
      <p>-----------------------</p>
    </div>
  );
}

export default ContactCard
