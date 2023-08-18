import { FC } from 'react';
import { Button } from '../../shared/components';
import { Button_Type } from '../../shared/components/button';
import { useScreenType } from '../../shared/hooks';
import { Navigation } from './navigation/navigation';

export const Header: FC = () => {
  const { isLaptop } = useScreenType();
  return (
    <div className="flex flex-col items-center sticky top-0 z-20">
      <div className="w-screen top-0 sticky bg-white h-20 flex items-center justify-between z-20 tabletM:pl-26 tabletM:pr-26 pr-4 pl-4">
        <img src="public/imgs/header/logo.png" className="w-44" />
        <div className="flex gap-10">
          {isLaptop && <Navigation />}
          <Button buttonType={Button_Type.MORE_INFO_BUTTON}>
            Швидка підтримка
          </Button>
        </div>
      </div>
    </div>
  );
};
