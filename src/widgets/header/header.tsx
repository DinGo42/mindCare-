import { memo } from 'react';
import { AppButton } from '../../shared/components';
import { STANDART_BUTTON_STYLES } from '../../shared/constants';
import { useScreenType } from '../../shared/hooks';
import { Navigation } from './navigation';

const useHeader = () => {
  const { isLaptop } = useScreenType();
  return (
    <div className="flex flex-col items-center sticky top-0 z-20">
      <div className="w-screen top-0 sticky bg-white h-20 flex items-center justify-between z-20 tabletM:pl-26 tabletM:pr-26 pr-4 pl-4">
        <img src="public/imgs/header/logo.png" className="w-44" />
        <div className="flex gap-10">
          {isLaptop && <Navigation />}
          <AppButton
            className={STANDART_BUTTON_STYLES.REGULAR_MORE_INFO_BUTTON}
          >
            Швидка підтримка
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export const Header = memo(useHeader);
