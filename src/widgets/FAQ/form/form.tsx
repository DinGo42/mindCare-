import { FC, memo, useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { XIcon } from '../../../../public/imgs';
import { Button, LockContent } from '../../../shared/components';
import { modalConxtex } from '../../../shared/hooks';
import { Button_Type } from '../../../shared/components/button';
type IFormInputs = {
  quastion: string;
  email: string;
};
export const FAQForm: FC = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const { closeModal } = useContext(modalConxtex);
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    closeModal();
    console.log(data);
  };
  return (
    <LockContent className="items-center justify-center" blur={true}>
      <div className="flex-col max-w-md w-screen h-fit bg-green-500 rounded-xl flex justify-center items-end pb-10 pr-10 pl-10 pt-5 gap-6 border-2 border-green-600 border-l-4 border-b-4">
        <Button onClick={closeModal} className="p-4">
          <XIcon />
        </Button>

        <div className="flex w-full h-full flex-col">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full h-full justify-between items-center gap-14"
          >
            <input
              {...register('quastion', {
                required: {
                  value: true,
                  message: 'Якщо вас щось цікавить, то це поле обов`язкове',
                },
                minLength: {
                  value: 3,
                  message: 'Опишіть більш масштабно те що вас цікавить',
                },
              })}
              placeholder="Що вас цікавить?"
              className="w-full rounded-md p-2 bg-green-100 text-black-600 outline-none"
            />
            {errors.quastion && (
              <p className="text-black-500">{errors.quastion.message}</p>
            )}
            <input
              {...register('email', {
                required: {
                  value: true,
                  message:
                    'Вам потрібно вказати почту щоб ми могли вам відповісти',
                },
              })}
              type="email"
              placeholder="Ваша почта"
              className="w-full rounded-md p-2 bg-green-100 text-black-600 outline-none"
            />
            {errors.email && (
              <p className="text-black-500">{errors.email.message}</p>
            )}

            <Button
              type="submit"
              className={`w-full justify-center`}
              buttonType={Button_Type.MORE_INFO_BUTTON}
            >
              Надіслати
            </Button>
          </form>
        </div>
      </div>
    </LockContent>
  );
});
