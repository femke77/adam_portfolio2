import React, { createContext, useContext, useState } from 'react';

// Create the context
const AnimationContext = createContext();
export const useAnimationContext = () => useContext(AnimationContext);

// Create the provider component
export const AnimationProvider = ({ children }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const disableAnimation = () => setHasAnimated(true);

  return (
    <AnimationContext.Provider value={{ hasAnimated, disableAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

// Custom hook to use the context
