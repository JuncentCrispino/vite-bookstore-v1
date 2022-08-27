import React, { useMemo, useEffect } from 'react';
import { endLoading, startLoading } from '../utility/nprogress';
import { usePage } from './usePage';

const Page = ({ children }) => {
  const { onLoad } = usePage();

  const render = useMemo(() => {
    return <>{children}</>;
  }, [children]);

  useEffect(() => {
    onLoad(render);
  }, [onLoad, render]);

  useEffect(() => {
    endLoading();
    return () => startLoading();
  }, []);

  return render;
};

export default Page;