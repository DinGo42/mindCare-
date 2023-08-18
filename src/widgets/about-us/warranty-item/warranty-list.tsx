import { WattantyCard } from './warranty-item';
import { warrantyInformation } from './constants';
import { FC } from 'react';

export const WarrantyList: FC = () =>
  warrantyInformation.map((information, index) => (
    <WattantyCard {...information} key={index} />
  ));
