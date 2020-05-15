import React, { useState } from 'react';
import LeftPlaygound from './LeftPlayground';
import RightPlaygound from './RightPlaygound';

export default function App() {
  
  return (
    <div className='playGround'>
      <div className='body'>
        <LeftPlaygound />
        <RightPlaygound />
      </div>
    </div>
  );
}