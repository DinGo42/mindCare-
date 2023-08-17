import { memo, useContext } from 'react';
import { AppButton } from '../../shared/components';
import { STANDART_BUTTON_STYLES } from '../../shared/constants';
import { modalConxtex } from '../../shared/hooks';
import { DropDownText } from './drop-down-text';
import { FAQList } from './drop-down-text/api';
import { FAQForm } from './form';

const useFAQ = () => {
  const { openModal } = useContext(modalConxtex);
  return (
    <div className="w-full h-fit flex flex-col items-center gap-12 text-regular-bold text-black-600">
      <h1 className="text-black-600 text-bold-large max-tabletS:text-center ">
        Популярні питання
      </h1>
      <div className="flex flex-col w-3/5 border-t-1">
        {FAQList.map((question, index) => (
          <DropDownText {...question} key={index} />
        ))}
      </div>
      <h2 className="text-center pl-10 pr-10">
        Не вдалося знайти відповіді на своє питання? Задайте його нам,
        <br /> і ми з радістю допоможемо вам знайти рішення
      </h2>
      <AppButton
        className={STANDART_BUTTON_STYLES.REGULAR_MORE_INFO_BUTTON}
        onClick={() => openModal(<FAQForm />)}
      >
        Задати запитання
      </AppButton>
    </div>
  );
};
export const FAQ = memo(useFAQ);
