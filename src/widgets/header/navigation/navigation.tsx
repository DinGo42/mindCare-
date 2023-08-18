import { FC, useState } from 'react';
import { PageAnchors } from '../../../pages/main';
import { NavigationButton } from './navagation-button';

export const Navigation: FC = () => {
  const [currentSection, setCurrentSection] = useState('');
  return (
    <div className="flex w-fit gap-7 items-center">
      <NavigationButton
        currentSection={currentSection}
        clickHandler={setCurrentSection}
        section={PageAnchors.ABOUTUS}
        text="Про нас"
      />
      <NavigationButton
        currentSection={currentSection}
        clickHandler={setCurrentSection}
        section={PageAnchors.THERAPY}
        text="Послуги"
      />
      <NavigationButton
        currentSection={currentSection}
        clickHandler={setCurrentSection}
        text="Психотеравевти"
      />
      <NavigationButton
        currentSection={currentSection}
        clickHandler={setCurrentSection}
        section={PageAnchors.REVIEWS}
        text="Відгуки"
      />
      <NavigationButton
        currentSection={currentSection}
        clickHandler={setCurrentSection}
        text="Блог"
      />
      <NavigationButton
        currentSection={currentSection}
        clickHandler={setCurrentSection}
        section={PageAnchors.CONTACT}
        text="Контакти"
      />
      <NavigationButton
        currentSection={currentSection}
        clickHandler={setCurrentSection}
        section={PageAnchors.FAQ}
        text="FAQ"
      />
    </div>
  );
};
