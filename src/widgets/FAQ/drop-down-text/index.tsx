import { FC, memo, useState } from 'react';
import { ArrowIcon } from '../../../../public/imgs';
import { AppButton } from '../../../shared/components';
import { BASIC_ANIMATION } from '../../therapy-content/content';

type DropDownTextProperties = {
  question: string;
  answer: string;
};
const useDropDownText: FC<DropDownTextProperties> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`text-black-600 flex flex-col w-full pt-5 pb-5 gap-4 border-b-1`}
    >
      <div className="flex justify-between items-center">
        <p className="text-regular-bold w-full">{question}</p>

        <AppButton
          onClick={() => setOpen((prev) => !prev)}
          className={`${
            open ? 'rotate-90' : '-rotate-90'
          } w-10 h-10 flex justify-center items-center rounded-full`}
        >
          <ArrowIcon fill="#333" />
        </AppButton>
      </div>
      {open && <p className="max-w-full text-regula">{answer}</p>}
    </div>
  );
};
export const DropDownText = memo(useDropDownText);
