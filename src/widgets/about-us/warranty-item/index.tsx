import { FC, memo } from 'react';
import { warrantyInformationType } from './api';
import { BASIC_ANIMATION } from '../../therapy-content/content';

type ContentItemProperties = warrantyInformationType;

const ContentItem: FC<ContentItemProperties> = ({ title, text }) => (
  <div
    className={`flex flex-col gap-3 ${BASIC_ANIMATION.STANDART_SMOOTH_ANIMATION}`}
  >
    <h1 className="text-large text-green-700 w-28">{title}</h1>
    <h3 className="w-4/5">{text}</h3>
  </div>
);

export const WattantyItem = memo(ContentItem);
