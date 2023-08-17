import { memo, useState } from 'react';
import { AppButton } from '../../../shared/components';
import { STANDART_BUTTON_STYLES } from '../../../shared/constants';
import { PageAnchors } from '../../../pages/main';

const useNavigation = () => {
  const [currentSection, setCurrentSection] = useState('');
  return (
    <div className="flex w-fit gap-7 items-center">
      <AppButton
        className={`${STANDART_BUTTON_STYLES.REGULAR_HEADER_BUTTON} ${
          currentSection === PageAnchors.ABOUTUS
            ? 'border-b-2 border-orange-700'
            : ''
        }`}
      >
        <a
          href={`#${PageAnchors.ABOUTUS}`}
          onClick={() => setCurrentSection(PageAnchors.ABOUTUS)}
        >
          Про нас
        </a>
      </AppButton>
      <AppButton
        className={`${STANDART_BUTTON_STYLES.REGULAR_HEADER_BUTTON} ${
          currentSection === PageAnchors.THERAPY
            ? 'border-b-2 border-orange-700'
            : ''
        }`}
      >
        <a
          href={`#${PageAnchors.THERAPY}`}
          onClick={() => setCurrentSection(PageAnchors.THERAPY)}
        >
          Послуги
        </a>
      </AppButton>
      <AppButton className={`${STANDART_BUTTON_STYLES.REGULAR_HEADER_BUTTON}`}>
        <a
          href={`#${PageAnchors.THERAPY}`}
          onClick={() => setCurrentSection(PageAnchors.THERAPY)}
        >
          Психотерапевти
        </a>
      </AppButton>
      <AppButton
        className={`${STANDART_BUTTON_STYLES.REGULAR_HEADER_BUTTON} ${
          currentSection === PageAnchors.REVIEWS
            ? 'border-b-2 border-orange-700  '
            : ''
        }`}
      >
        <a
          href={`#${PageAnchors.REVIEWS}`}
          onClick={() => setCurrentSection(PageAnchors.REVIEWS)}
        >
          Відгуки
        </a>
      </AppButton>
      <AppButton className={`${STANDART_BUTTON_STYLES.REGULAR_HEADER_BUTTON}`}>
        <a
          href={`#${PageAnchors.ABOUTUS}`}
          onClick={() => setCurrentSection(PageAnchors.ABOUTUS)}
        >
          Блог
        </a>
      </AppButton>
      <AppButton
        className={`${STANDART_BUTTON_STYLES.REGULAR_HEADER_BUTTON} ${
          currentSection === PageAnchors.CONTACT
            ? 'border-b-2 border-orange-700  '
            : ''
        }`}
      >
        <a
          href={`#${PageAnchors.CONTACT}`}
          onClick={() => setCurrentSection(PageAnchors.CONTACT)}
        >
          Контакти
        </a>
      </AppButton>
      <AppButton
        className={`${STANDART_BUTTON_STYLES.REGULAR_HEADER_BUTTON} ${
          currentSection === PageAnchors.FAQ
            ? 'border-b-2 border-orange-700  '
            : ''
        }`}
      >
        <a
          href={`#${PageAnchors.FAQ}`}
          onClick={() => setCurrentSection(PageAnchors.FAQ)}
        >
          FAQ
        </a>
      </AppButton>
    </div>
  );
};
export const Navigation = memo(useNavigation);
