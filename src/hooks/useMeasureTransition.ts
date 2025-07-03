import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { performanceState } from '../recoil/performanceState';

export const useMeasureTransition = () => {
  const location = useLocation();
  const [data, setData] = useRecoilState(performanceState);

  useEffect(() => {
    const startTime = Number(sessionStorage.getItem('transitionStart'));

    if (startTime) {
      const duration = performance.now() - startTime;
      setData((prev) => [
        ...prev,
        {
          route: location.pathname,
          time: +duration.toFixed(2),
        },
      ]);
      sessionStorage.removeItem('transitionStart'); // Clean up
    }
  }, [location.pathname]);
};
