import React from 'react';
import '../css/stylesheet.css'

function StyleSheet(props) {
    const style = props.className? "primary" : ""
  return (<div>
      <h2 className={`${style} font-xl`}>StyleSheet</h2>
  </div>);
}

export default StyleSheet;
