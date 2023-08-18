import { FC, memo } from 'react';
import { ArrowLinkIcon } from '../../../../public/imgs';
import { Button } from '../../../shared/components';
import { BASIC_ANIMATION } from './constants';
import { Button_Type } from '../../../shared/components/button';

type TherapyCartProps = {
  type: string;
  description: string;
  img: string;
  imgClassName?: string;
};

export const TherapyCard: FC<TherapyCartProps> = memo(
  ({ type, description, img, imgClassName }) => (
    <div
      className={`card__front ${BASIC_ANIMATION.STANDART_SMOOTH_ANIMATION} bg-cover min-w-360 min-h-360 w-full h-full bg-green-600 justify-between  flex relative phoneM:pl-5 flex-col items-start bg-leaf-texture-therapy-item bg-no-repeat rounded-lg pt-5 pb-5 text-large text-white`}
    >
      <div className="flex-col flex gap-5 z-10 max-tabletS:items-center max-tabletS:gap-20 max-tabletS:pt-28 justify-start w-full">
        <h2 className="text-bold-large">{type}</h2>
        <h5 className="text-black-300 w-60">{description}</h5>
      </div>
      <Button buttonType={Button_Type.THERAPY_BUTTON}>
        Написати
        <ArrowLinkIcon />
      </Button>
      <img
        src={img}
        className={`max-tabletS:hidden absolute bottom-0 right-0 z-0 h-auto 2k:w-auto max-PCM:h-full max-PCM:w-auto ${
          imgClassName ? imgClassName : 'w-4/5'
        }`}
      />
    </div>
  )
);
