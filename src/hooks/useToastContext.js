import { useContext } from 'react';

import ToastContext from 'utils/contexts/ToastContext';

const useToastContext = () => useContext(ToastContext);

export default useToastContext;
