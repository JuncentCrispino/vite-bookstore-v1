import React, { useMemo, useEffect } from 'react';
import { endLoading, startLoading } from '../utility/nprogress';
import { usePage } from './usePage';
import { motion } from 'framer-motion';

const Page = ({ children }) => {
  const { onLoad } = usePage();

  const render = useMemo(() => {
    return children;
  }, [children]);

  useEffect(() => {
    onLoad(render);
  }, [onLoad, render]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {render}
    </motion.div>
  );
};

export default Page;