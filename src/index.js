import React, { useState } from 'react';

const MyComponent = (props) => {
  const [state, setState] = useState(0);
  
  const { label } = props;
  return (
    <div>
      <button>{label}</button>
    </div>
  );
}
export default MyComponent;