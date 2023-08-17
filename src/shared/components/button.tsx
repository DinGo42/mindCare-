import { FC, ReactNode, memo } from 'react';
import { STANDART_BUTTON_STYLES } from '../constants/button';

type AppButtonProperties = {
  children?: ReactNode;
  className?: STANDART_BUTTON_STYLES | string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const appButton: FC<AppButtonProperties> = ({
  children,
  className = STANDART_BUTTON_STYLES.REGULAR_HEADER_BUTTON,
  ...props
}) => (
  <button className={`${className} flex min-w-fit`} {...props}>
    {children}
  </button>
);

export const AppButton = memo(appButton);
