import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return [isShowing, toggle] as const;
};

export default useModal;
