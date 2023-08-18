import { FC, memo, useState } from 'react';
import { ArrowIcon } from '../../../../public/imgs';
import { Button } from '../../../shared/components';

type DropDownProp = {
  question: string;
  answer: string;
};
export const DropDownCard: FC<DropDownProp> = memo(({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`text-black-600 flex flex-col w-full pt-5 pb-5 gap-4 border-b-1`}
    >
      <div className="flex justify-between items-center">
        <p className="text-regular-bold w-full">{question}</p>

        <Button
          onClick={() => setOpen((prev) => !prev)}
          className={`${
            open ? 'rotate-90' : '-rotate-90'
          } w-10 h-10 flex justify-center items-center rounded-full`}
        >
          <ArrowIcon fill="#333" />
        </Button>
      </div>
      {open && <p className="max-w-full text-regula">{answer}</p>}
    </div>
  );
});
