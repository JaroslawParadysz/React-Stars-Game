import React, { useState } from 'react';
//import style from './styles/app.scss';

export default function Hello() {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <div>
        Hello Component!
      </div>
    </React.Fragment>
  );
}