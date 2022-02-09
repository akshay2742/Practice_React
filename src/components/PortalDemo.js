import React from 'react';
import reactDom from 'react-dom';

function PortalDemo() {
  return reactDom.createPortal(
  <h2>
      Hello This is Akshay
  </h2>,document.getElementById('portal-root'))
}

export default PortalDemo;
