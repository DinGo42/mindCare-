import { memo } from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PointIcon,
  TelegramIcon,
  TwitterIcon,
} from '../../../public/imgs';

const contact = () => (
  <div className="max-tabletS:justify-center max-PCS:pb-20 max-PCS:pt-20 flex w-full h-fit bg-green-500 items-center justify-around bg-leaf-texture-contacts bg-no-repeat rounded-xl">
    <div className="max-tabletS:hidden w-1/2 h-full">
      <img
        src="public/imgs/contacts/consultation.png"
        className="PCS:w-2/3 PCS:pb-36 PCS:pl-24 PCS:pt-36"
      />
    </div>
    <div className="flex tabletS:w-1/3 h-fit gap-5 flex-col">
      <h1 className="text-bold-large text-center text-black-600 max-tabletM:hidden">
        Контакти
      </h1>
      <div className="flex w-full h-fit gap-5">
        <div className="flex tabletS:w-3/4 flex-col gap-5">
          <div className="flex w-full h-full justify-center items-center flex-col bg-white rounded-lg text-orange-700 p-6">
            <PhoneIcon />
            <span>+38 097 45 25 124</span>
          </div>
          <div className="flex w-full h-full justify-center items-center flex-col bg-white rounded-lg text-orange-700 p-6">
            <MailIcon />
            <span>info@mindcare.com</span>
          </div>
          <div className="flex w-full h-full justify-center items-center flex-col bg-white rounded-lg text-orange-700 p-6 text-center">
            <PointIcon />
            <span>
              Тернопіль <br /> вул. Героїв Євромайдану 12/а
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-white justify-center items-center gap-10 p-9 rounded-lg">
          <LinkedInIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <TelegramIcon />
        </div>
      </div>
    </div>
  </div>
);

export const Contact = memo(contact);
