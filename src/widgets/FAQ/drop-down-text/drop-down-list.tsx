import { DropDownCard } from './drop-down-card';
import { faqList } from './constants';
import { FC } from 'react';

export const DropDownList: FC = () =>
  faqList.map((question, index) => <DropDownCard {...question} key={index} />);
