import { FC, memo, useCallback, useRef, useState } from 'react';
import { ArrowLinkIcon } from '../../../../public/imgs';
import { AppButton } from '../../../shared/components';
import { STANDART_BUTTON_STYLES } from '../../../shared/constants';
import { BASIC_ANIMATION } from '../content';

type TherapyItemProperties = {
  type: string;
  description: string;
  img: string;
  imgClassName?: string;
};
// const therapyItem: FC<TherapyItemProperties> = ({
//   type,
//   description,
//   img,
//   imgClassName,
// }) => (
//   <div
//     className={`${BASIC_ANIMATION.STANDART_SMOOTH_ANIMATION} bg-cover min-w-360 min-h-360 w-full h-full bg-green-600 justify-between  flex relative phoneM:pl-5 flex-col items-start bg-leaf-texture-therapy-item bg-no-repeat rounded-lg pt-5 pb-5 text-large text-white`}
//   >
//     <div className="flex-col flex gap-5 z-10 max-tabletS:items-center max-tabletS:gap-20 max-tabletS:pt-28 justify-start w-full">
//       <h2 className="text-bold-large">{type}</h2>
//       <h5 className="text-black-300 w-60">{description}</h5>
//     </div>
//     <AppButton
//       className={STANDART_BUTTON_STYLES.REGULAR_THERAPY_CONTESNT_BUTTON}
//     >
//       Написати
//       <ArrowLinkIcon />
//     </AppButton>
//     <img
//       src={img}
//       className={`max-tabletS:hidden absolute bottom-0 right-0 z-0 h-auto 2k:w-auto max-PCM:h-full max-PCM:w-auto ${
//         imgClassName ? imgClassName : 'w-4/5'
//       }`}
//     />
//   </div>
// );

const useTherapyItem: FC<TherapyItemProperties> = ({
  type,
  description,
  img,
  imgClassName,
}) => {
  const [clicked, setClicked] = useState(false);
  const cartRef = useRef(null);
  const clickHandler = useCallback(() => {
    setClicked((prev) => !prev);

    // cartRef.current.
  }, []);
  return (
    <div className="card" ref={cartRef} onClick={clickHandler}>
      <div
        className={`card__front ${BASIC_ANIMATION.STANDART_SMOOTH_ANIMATION} bg-cover min-w-360 min-h-360 w-full h-full bg-green-600 justify-between  flex relative phoneM:pl-5 flex-col items-start bg-leaf-texture-therapy-item bg-no-repeat rounded-lg pt-5 pb-5 text-large text-white`}
      >
        <div className="flex-col flex gap-5 z-10 max-tabletS:items-center max-tabletS:gap-20 max-tabletS:pt-28 justify-start w-full">
          <h2 className="text-bold-large">{type}</h2>
          <h5 className="text-black-300 w-60">{description}</h5>
        </div>
        <AppButton
          className={STANDART_BUTTON_STYLES.REGULAR_THERAPY_CONTESNT_BUTTON}
        >
          Написати
          <ArrowLinkIcon />
        </AppButton>
        <img
          src={img}
          className={`max-tabletS:hidden absolute bottom-0 right-0 z-0 h-auto 2k:w-auto max-PCM:h-full max-PCM:w-auto ${
            imgClassName ? imgClassName : 'w-4/5'
          }`}
        />
      </div>
      <div className="card__back"></div>
    </div>
  );
};

export const TherapyItem = memo(useTherapyItem);
