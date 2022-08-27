import { useContext, useCallback } from 'react';
import { FallbackContext } from './FallbackProvider';

export function usePage() {
  const { updateFallback } = useContext(FallbackContext);

  const onLoad = useCallback((component) => {
    if (component === undefined) component = null;
    updateFallback(component);
  }, [updateFallback]);

  return {
    onLoad
  };
}