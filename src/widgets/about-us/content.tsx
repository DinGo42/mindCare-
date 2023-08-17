import { memo } from 'react';
import { AppButton } from '../../shared/components';
import { STANDART_BUTTON_STYLES } from '../../shared/constants';
import { warrantyInformation } from './warranty-item/api';
import { WattantyItem } from './warranty-item';

const aboutUs = () => (
  <>
    <div className="flex w-full gap-16 items-center max-PCS:flex-wrap max-PCS:justify-center">
      <div className="phoneM:w-4/6 w-full h-fit  text-black-600 flex flex-col gap-8 max-PCS:items-center">
        <div className="flex flex-col PCS:w-3/5 gap-4 max-PCS:text-center">
          <img src="public/imgs/header/logo.png" className="w-44" />
          <h1 className="text-bold-large">
            Про нашу службу психічного здоров'я
          </h1>
        </div>
        <h3 className="w-4/6">
          Наша місія полягає в тому, щоб допомогти вам зміцнити свій розум і
          змінити своє життя. Ми розуміємо, що психічне здоров'я є важливим
          аспектом вашого загального благополуччя, і тому працюємо, щоб
          забезпечити доступну та якісну підтримку для всіх, хто звертається до
          нас.
          <br />
          <br />
          Наші психотерапевти — досвідчені фахівці, які мають професійну
          підготовку та великий досвід роботи з різними людьми та проблемами.
          Вони прислухаються до ваших потреб і допомагають вам знайти ефективні
          інструменти та стратегії для подолання життєвих викликів.
        </h3>
        <AppButton className={STANDART_BUTTON_STYLES.REGULAR_MORE_INFO_BUTTON}>
          Детальніше про нас
        </AppButton>
      </div>
      <div
        className={`max-phoneM:p-4 phoneM:w-3/5 max-phoneM:ml-4 max-phoneM:mr-4 w-full h-fit bg-green-100 rounded-lg grid grid-cols-2 gap-10 phoneM:p-12 text-black-600 max-tabletS:grid-cols-1`}
      >
        {warrantyInformation.map((information, index) => (
          <WattantyItem {...information} key={index} />
        ))}
      </div>
    </div>
  </>
);

export const AboutUs = memo(aboutUs);
