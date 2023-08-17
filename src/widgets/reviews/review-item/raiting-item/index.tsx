import { memo, useMemo } from 'react';
import { StarIcon, HalfStarIcon } from '../../../../../public/imgs';
import { maxRaiting } from '../../../../shared/constants';

const useRaiting = ({ rate }: { rate: number }) => {
  rate > maxRaiting ? (rate = 5) : rate;
  const isInteger = useMemo(() => rate === Math.floor(rate + 0.5), [rate]);
  const rateArray = useMemo(() => new Array(Math.floor(rate)).fill(0), [rate]);
  const notRatedArray = useMemo(
    () => new Array(Math.floor(maxRaiting - rate)).fill(0),
    [rate]
  );
  return (
    <div className="flex w-full items-center">
      {rateArray.map((_, index) => (
        <StarIcon key={index} />
      ))}

      {!isInteger && <HalfStarIcon />}
      {notRatedArray.map((_, index) => (
        <StarIcon fill={'#d9d9d9'} key={index} />
      ))}
    </div>
  );
};

export const Raiting = memo(useRaiting);
