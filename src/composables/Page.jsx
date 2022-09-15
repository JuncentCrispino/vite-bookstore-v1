import React, { useMemo, useEffect } from 'react';
import { endLoading, startLoading } from '../utility/nprogress';
import { usePage } from './usePage';
import { motion } from 'framer-motion';

const Page = ({ children }) => {
  const { onLoad } = usePage();

  const render = useMemo(() => {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {children}
      </motion.div>
    );
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