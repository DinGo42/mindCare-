import { FC, memo } from 'react';
import { Button } from '../../../shared/components';
import { Button_Type } from '../../../shared/components/button';
type NavigationButtonProps = {
  text: string;
  section?: string;
  currentSection: string;
  clickHandler: React.Dispatch<React.SetStateAction<string>>;
};
export const NavigationButton: FC<NavigationButtonProps> = memo(
  ({ text, section, currentSection, clickHandler }) => (
    <Button
      className={` ${
        currentSection === section ? 'border-b-2 border-orange-700' : ''
      }`}
      buttonType={Button_Type.HEADER_BUTTON}
      onClick={() => {
        if (section) clickHandler(section);
      }}
    >
      <a href={`#${section}`}>{text}</a>
    </Button>
  )
);
