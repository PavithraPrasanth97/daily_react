import React from 'react';
import {Child} from './Child';

export const Props = () => {
    const name = 'Pavithra';
    const msg = 'Hi...';
  return (
    <div>
    <h1>Parent</h1>
    <Child name={name}  message={msg}/>
    </div>
  );
};

