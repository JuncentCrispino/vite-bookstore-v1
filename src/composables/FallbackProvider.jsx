import React, { createContext, Suspense, useState, useMemo, useCallback } from 'react';

export const FallbackContext = createContext({
  updateFallback: () => {}
});

export function FallbackProvider({ children }) {
  const [fallback, setFallback] = useState(null);

  const updateFallback = useCallback((fallback) => {
    setFallback(() => fallback);
  }, []);

  const renderChildren = useMemo(() => {
    return children;
  }, [children]);

  return (
    <FallbackContext.Provider value={{ updateFallback }}>
      <Suspense fallback={fallback}>
        {renderChildren}
      </Suspense>
    </FallbackContext.Provider>
  );
}