import { FC, memo } from 'react';
type avatarProperties = {
  name: string;
  surName?: string;
};
const avatar: FC<avatarProperties> = ({ name }) => (
  <img
    src={`https://ui-avatars.com/api/?name=${name}&background=548456&color=fff`}
    className="rounded-full w-12 h-12"
  />
);

export const Avatar = memo(avatar);
