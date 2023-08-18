import { FC } from 'react';
import { TherapyList } from './therapy-container/therapy-list';

export const ConsultationList: FC = () => (
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
      <TherapyList />
    </div>
  </div>
);
