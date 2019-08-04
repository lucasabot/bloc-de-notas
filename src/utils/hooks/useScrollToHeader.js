import { useEffect } from 'react';

import { scrollTo } from 'utils/browserUtils';

const useScrollToHeader = (isOpen, stepHeaderRef, dependencies) =>
  useEffect(() => {
    if (isOpen && dependencies && stepHeaderRef && stepHeaderRef.current) {
      scrollTo(document.documentElement, document.body.scrollHeight, 100);
      setTimeout(() => {
        stepHeaderRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }, 500);
    }
  }, [isOpen, stepHeaderRef, dependencies]);

export default useScrollToHeader;
