import React, { useState } from 'react';
import Component1 from './Component1';
import { CounterContext } from './counter-context';

const Navbar: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
      <div>
        <CounterContext.Provider value={counter}>
            <Component1 />
            <h4>
                <button onClick={() => setCounter(prev => prev + 1)}>Increment button from Navbar.tsx</button>
            </h4>
        </CounterContext.Provider>
    </div>
  );
};

export default Navbar;