import { FC, memo } from 'react';
import { StarIcon, HalfStarIcon } from '../../../../../public/imgs';

type RatingProps = {
  rate: number;
  length?: number;
};
export const Rating: FC<RatingProps> = memo(({ rate, length = 5 }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: length }, (_, index) => (
        <span key={index}>
          {rate >= index + 1 ? (
            <StarIcon />
          ) : rate >= index + 0.5 ? (
            <HalfStarIcon />
          ) : (
            <StarIcon fill={'#d9d9d9'} />
          )}
        </span>
      ))}
    </div>
  );
});
