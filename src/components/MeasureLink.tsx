// components/MeasuredLink.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { performanceState } from '../recoil/performanceState';

export const MeasuredLink = ({ to, children, ...rest }: any) => {
  const [_, setData] = useRecoilState(performanceState);

  const handleClick = () => {
    const start = performance.now();
    sessionStorage.setItem('transitionStart', start.toString());
  };

  return (
    <Link to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};
