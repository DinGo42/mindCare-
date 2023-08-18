import { FC } from 'react';
import { reviewsList } from './constants';
import { ReviewCard } from './review';

export const ReviewsList: FC = () =>
  reviewsList.map((review, index) => <ReviewCard {...review} key={index} />);
