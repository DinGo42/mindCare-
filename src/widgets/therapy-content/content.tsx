import { memo } from 'react';
import { TherapyItem } from './therapy-item';
import { therapyList } from './therapy-item/api';

export enum BASIC_ANIMATION {
  STANDART_SMOOTH_ANIMATION = 'hover:scale-105 transition-all delay-100',
}

const content = () => (
  <div
    className={`w-full h-fit tabletS:p-20 p-4 bg-green-100 flex flex-col items-center text-black-600 gap-10 rounded-xl`}
  >
    <div className="w-full flex flex-col items-center gap-20">
      <h1 className="text-bold-large text-center">
        Найперший крок до покращення — <br /> написати нам повідомлення
      </h1>
      <h4 className="text-small-medium">Який тип терапії ви шукаєте?</h4>
    </div>
    <div className="w-full flex gap-5 h-fit max-PCM:flex-wrap">
      {therapyList.map((item, index) => (
        <TherapyItem {...item} key={index} />
      ))}
    </div>
  </div>
);

export const Content = memo(content);
