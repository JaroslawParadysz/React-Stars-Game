import React, { useState } from 'react';
import style from './styles/app.scss';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <div>
        This is a sample stateful and server-side
        rendered React application.
        <br />
        <br />
        Here is a button that will track
        how many times you click it:
        <br />
        <br />
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
      <div className={style.gamePlayground}>
        Hello !
      </div>
    </React.Fragment>
  );
}