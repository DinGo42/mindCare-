import { FC, memo } from 'react';
import { Raiting } from './raiting-item';
import { Avatar } from './avatar-item';
import { BASIC_ANIMATION } from '../../therapy-content/content';

export type ReviewProperies = {
  content: string;
  raiting: number;
  author: {
    name: string;
    surName?: string;
    age: number;
    avatar?: string;
  };
};

const determineYearForm = (number: number) => {
  return number % 10 >= 2 &&
    number % 10 <= 4 &&
    (number % 100 < 10 || number % 100 >= 20)
    ? ' роки'
    : ' років';
};
const reviewItem: FC<ReviewProperies> = ({ content, raiting, author }) => (
  <div
    className={`min-w-300 min-h-300 bg-white text-black-600 p-6 flex flex-col justify-between rounded-lg gap-5 flex-nowrap ${BASIC_ANIMATION.STANDART_SMOOTH_ANIMATION}`}
  >
    <Raiting rate={raiting} />
    <h2>{content}</h2>
    <div className="w-full flex gap-3">
      <Avatar {...author} />
      <div className="flex flex-col">
        <span className="text-small-medium">{author.name}</span>
        <span className="text-black-500">
          {author.age}
          {determineYearForm(author.age)}
        </span>
      </div>
    </div>
  </div>
);

export const ReviewItem = memo(reviewItem);
