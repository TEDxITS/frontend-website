import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import useLoadingToast from '@/hooks/toast/useLoadingToast';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import InputPassword from '@/components/input/InputPassword';
import NextImage from '@/components/NextImage';

enum InputField {
  'NAME' = 'name',
  'EMAIL' = 'email',
  'PASSWORD' = 'password',
}

type ProfileDataType = {
  [InputField.NAME]: string;
  [InputField.EMAIL]: string;
  [InputField.PASSWORD]?: string;
};

const profileInitialValue: ProfileDataType = {
  name: 'dhana',
  email: 'dhana@gmail.com',
};

function ProfileForm() {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const isLoading = useLoadingToast();
  const methods = useForm<ProfileDataType>({
    defaultValues: profileInitialValue,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, setValue } = methods;

  // React.useEffect(() => {
  //   const getData = async () => {
  //     api.get<Profile>('/profile').then((res: Profile) => {
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       // @ts-ignore
  //       setValue('name', res.user_name);
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       // @ts-ignore
  //       setValue('email', res.user_email);
  //     });
  //   };
  //   getData();
  // }, [setValue]);

  const onSubmit: SubmitHandler<ProfileDataType> = async (data) => {
    if (isEditing) {
      // toast.promise(
      //   api.post(`/profile/edit`, data).then(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setValue('name', data.name);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setValue('email', data.email);
      setIsEditing(false);
      //   }),
      //   {
      //     ...DEFAULT_TOAST_MESSAGE,
      //     success: 'Berhasil! Anda bisa masuk ke akun anda',
      //   }
      // );
    } else {
      setIsEditing(true);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className='sm:layout'>
        <NextImage
          src='/images/ticketing/red-stripe.png'
          width={40}
          height={40}
          alt='sticker'
          quality={100}
          className='rotate-45 sm:ml-6 sm:rotate-0 sm:translate-y-3'
        />
        <div className='bg-white drop-shadow-xl flex flex-col h-[35rem] overflow-clip pb-4 pt-10 px-10 rounded-3xl sm:mx-16'>
          <div className='flex flex-col items-center w-full'>
            <div className='relative'>
              <h2 className='flex font-extrabold font-fivo text-cdark text-xl sm:text-3xl'>
                <span className='-skew-x-6'>
                  PERS<span className='-translate-y-1 font-pilow'>O</span>NAL
                </span>
                <span className='mx-1.5 sm:mt-0.5'>
                  <NextImage
                    src='/images/ticketing/yellow-sun.png'
                    width={33}
                    height={33}
                    alt='sticker'
                    quality={100}
                    className='animate-[spin_10s_ease_infinite]'
                  />
                </span>
                <span className='-skew-x-6'>
                  INFORM
                  <span className='-translate-y-1 font-pilow'>A</span>TION
                </span>
              </h2>
              <NextImage
                src='/images/ticketing/blue-elips.png'
                width={500}
                height={60}
                alt='sticker'
                quality={100}
                className='-top-4 -translate-x-24 absolute scale-75 sm:-translate-x-8 sm:scale-100'
              />
            </div>
            <p className='mb-4 mt-6 text-cdark text-xs'>
              We will ensure to{' '}
              <span className='font-bold'>keep your private</span> information,
              this data collection is conducted{' '}
              <span className='font-bold'>
                for TEDxITS 2022&apos;s importance only.
              </span>
            </p>
          </div>
          <form
            className='flex flex-col flex-grow p-4 space-y-4'
            onSubmit={handleSubmit((data) => onSubmit(data))}
          >
            <Input
              className='rounded'
              dark={true}
              id={InputField.NAME}
              type='text'
              label={'Full Name'}
              readOnly={isEditing ? false : true}
            />
            <Input
              className='rounded'
              dark={true}
              id={InputField.EMAIL}
              type='email'
              label={'Email'}
              readOnly={isEditing ? false : true}
            />
            <div className={isEditing ? '' : 'hidden'}>
              <InputPassword
                className='rounded'
                dark={true}
                id={InputField.PASSWORD}
                type='password'
                label={'Password'}
                readOnly={isEditing ? false : true}
              />
            </div>
            <div className='flex flex-grow items-end justify-end'>
              <Button type='submit' isLoading={isLoading}>
                {isEditing ? 'Save' : 'Edit'}
              </Button>
            </div>
          </form>
          <NextImage
            src='/images/ticketing/paw.png'
            width={600}
            height={600}
            alt='paw'
            className='-bottom-48 -right-56 -z-10 absolute scale-75 sm:-right-32 sm:scale-100'
          />
        </div>
        <div className='flex justify-end'>
          <NextImage
            src='/images/ticketing/red-stripe.png'
            width={40}
            height={40}
            alt='sticker'
            quality={100}
            className='rotate-[225deg] sm:-translate-y-3 sm:mr-6 sm:rotate-180'
          />
        </div>
        <div className='flex justify-between mb-6 mt-12 text-cdark text-xs'>
          <p className='font-medium'>
            <span className='font-black'>TED</span>xITS
          </p>
          <p>&copy; 2022</p>
        </div>
      </div>
    </FormProvider>
  );
}

export default ProfileForm;
