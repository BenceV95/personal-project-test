'use client'

import React, { useState } from 'react'

const counter = () => {

    const [count, setCounter] = useState(0);

  return (
    <div>
        
        <p>counter: {count}</p>
        <button type='button' onClick={() => setCounter(prev => prev + 1)}>Add 1</button>
    </div>
  )
}

export default counter