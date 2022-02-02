import React from 'react';

function ChildList({person}) {
    
  return (<div>
    <h2>Hi, This is {person.name}, my age is {person.age} </h2>
  </div>);
}

export default ChildList;
