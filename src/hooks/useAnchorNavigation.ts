import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DELAY_TO_SCROLL = 200;

const scrollToAnchor = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};

type AnchorTarget = {
  path: string;
  anchor: string;
};

export const useAnchorNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToAnchor = ({ path, anchor }: AnchorTarget) => {
    if (location.pathname === path) {
      scrollToAnchor(anchor);
    } else {
      navigate(path, {
        state: { scrollToId: anchor },
      });
    }
  };

  useEffect(() => {
    const anchor = location.state?.scrollToId;

    if (anchor) {
      setTimeout(() => {
        scrollToAnchor(anchor);
      }, DELAY_TO_SCROLL);
    }
  }, [location]);

  return { goToAnchor };
};
