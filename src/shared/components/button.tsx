import { FC, ReactNode, memo } from 'react';

export enum Standart_Button_Styles {
  HEADER_BUTTON = 'text-black-600 text-regular-plus flex items-center pl-6 pr-6 h-14 ',
  THERAPY_BUTTON = 'max-phoneM:pl-5 flex justify-center items-center gap-1 underline z-10 text-regular-plus text-white',
  MORE_INFO_BUTTON = 'w-fit bg-orange-700 rounded-4xl text-white p-4 phoneM:pl-12 phoneM:pr-12',
  CARUSEL_BUTTON = 'rounded-full flex justify-center items-center border border-orange-700 w-16 h-16  hover:border-white',
  MINIMALISTIC_BUTTON = 'bg-none w-fit h-fit text-orange-700',
}

export enum Button_Type {
  HEADER_BUTTON = 'HEADER_BUTTON',
  THERAPY_BUTTON = 'THERAPY_BUTTON',
  MORE_INFO_BUTTON = 'MORE_INFO_BUTTON',
  CARUSEL_BUTTON = 'CARUSEL_BUTTON',
  MINIMALISTIC_BUTTON = 'MINIMALISTIC_BUTTON',
}

type ButtonProperties = {
  children?: ReactNode;
  className?: string;
  buttonType?: Button_Type;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<ButtonProperties> = memo(
  ({ children, className, buttonType, ...props }) => (
    <button
      className={`${className} flex min-w-fit ${
        buttonType && Standart_Button_Styles[buttonType]
      }`}
      {...props}
    >
      {children}
    </button>
  )
);
