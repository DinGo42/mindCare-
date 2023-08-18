import { FC, memo } from 'react';
import { warrantyInformationType } from './constants';
import { BASIC_ANIMATION } from '../../therapy-content/therapy-container/constants';

type ContentItemProperties = warrantyInformationType;

export const WattantyCard: FC<ContentItemProperties> = memo(
  ({ title, text }) => (
    <div
      className={`flex flex-col gap-3 ${BASIC_ANIMATION.STANDART_SMOOTH_ANIMATION}`}
    >
      <h1 className="text-large text-green-700 w-28">{title}</h1>
      <h3 className="w-4/5">{text}</h3>
    </div>
  )
);
