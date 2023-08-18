import { FC, useContext } from 'react';
import { Button } from '../../shared/components';
import { modalConxtex } from '../../shared/hooks';
import { FAQForm } from './form/form';
import { DropDownList } from './drop-down-text/drop-down-list';
import { Button_Type } from '../../shared/components/button';

export const FAQList: FC = () => {
  const { openModal } = useContext(modalConxtex);
  return (
    <div className="w-full h-fit flex flex-col items-center gap-12 text-regular-bold text-black-600">
      <h1 className="text-black-600 text-bold-large max-tabletS:text-center ">
        Популярні питання
      </h1>
      <div className="flex flex-col w-3/5 border-t-1">
        <DropDownList />
      </div>
      <h2 className="text-center pl-10 pr-10">
        Не вдалося знайти відповіді на своє питання? Задайте його нам,
        <br /> і ми з радістю допоможемо вам знайти рішення
      </h2>
      <Button
        buttonType={Button_Type.MORE_INFO_BUTTON}
        onClick={() => openModal(<FAQForm />)}
      >
        Задати запитання
      </Button>
    </div>
  );
};
