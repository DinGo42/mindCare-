import { FC } from 'react';
import { therapyList } from './constants';
import { TherapyCard } from './therapy-item';

export const TherapyList: FC = () =>
  therapyList.map((item, index) => <TherapyCard {...item} key={index} />);
