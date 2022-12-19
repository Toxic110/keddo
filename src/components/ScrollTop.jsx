import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {scrollWindow} from '../utils/scroll';

export default function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    scrollWindow({position: 0});
  }, [pathname]);

  return null;
}
