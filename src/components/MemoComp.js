import React from 'react';

function MemoComp({name}) {
    console.log("MemoComp render")
  return <div>This is a Memo Comp used by {name}</div>;
}

export default React.memo(MemoComp);
