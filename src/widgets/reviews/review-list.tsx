import { FC, useCallback, useRef, useState } from 'react';
import { ArrowIcon } from '../../../public/imgs';
import { Button } from '../../shared/components';

import { useScreenType } from '../../shared/hooks';
import { ReviewsList } from './review-item/reviews';
import { Button_Type } from '../../shared/components/button';

export const ReviewList: FC = () => {
  const { isTablet } = useScreenType();
  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollAmount] = useState(300);

  const handleScroll = useCallback(
    (bool: boolean) => {
      if (!containerRef.current) return;
      bool
        ? (containerRef.current.scrollLeft -= scrollAmount)
        : (containerRef.current.scrollLeft += scrollAmount);
    },
    [scrollAmount]
  );

  return (
    <div className="flex flex-col items-center">
      <div className=" h-fit flex w-screen bg-green-100 bg-leaf-texture-review bg-no-repeat flex-col text-black-600 items-center bg-cover tabletS:pt-32 tabletS:pb-32 tabletS:pr-26 tabletS:pl-28 p-4">
        <div className="flex w-full justify-between pb-12 items-center">
          <h1 className="text-bold-large">
            Ми отримали більше ніж 1 000 відгуків
          </h1>
          {isTablet && (
            <div className="flex gap-2">
              <Button
                buttonType={Button_Type.CARUSEL_BUTTON}
                onClick={() => handleScroll(true)}
              >
                <ArrowIcon />
              </Button>
              <Button
                onClick={() => handleScroll(false)}
                buttonType={Button_Type.CARUSEL_BUTTON}
              >
                <ArrowIcon className={'rotate-180'} />
              </Button>
            </div>
          )}
        </div>
        <div className="flex gap-4 phoneM:pl-16 pl-10 phoneM:pr-16 overflow-hidden w-screen phoneM:ml-16">
          <div
            className="flex overflow-hidden overflow-x-hidden max-tabletS:overflow-x-auto max-tabletS:w-screen gap-10 scroll-smooth pt-5 pb-5"
            ref={containerRef}
          >
            <ReviewsList />
          </div>
        </div>
        <div className="flex items-center gap-14 pt-8 max-phoneM:flex-col">
          <Button buttonType={Button_Type.MORE_INFO_BUTTON}>
            Залишити відгук
          </Button>
          <Button
            className={` hover:bg-orange-700 hover:text-white phoneM:pl-12 phoneM:pr-12 rounded-4xl p-4`}
            buttonType={Button_Type.MINIMALISTIC_BUTTON}
          >
            Переглянути всі відгуки
          </Button>
        </div>
      </div>
    </div>
  );
};
