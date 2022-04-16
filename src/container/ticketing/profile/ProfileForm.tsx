import clsx from 'clsx';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from '@/lib/axios';
import useLoadingToast from '@/hooks/toast/useLoadingToast';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import InputPassword from '@/components/input/InputPassword';
import NextImage from '@/components/NextImage';

import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

enum InputField {
  'NAME' = 'name',
  'EMAIL' = 'email',
  'PASSWORD' = 'password',
  'CONFIRMPASSWORD' = 'confirmpassword',
}

type ProfileDataType = {
  [InputField.NAME]?: string;
  [InputField.EMAIL]?: string;
  [InputField.PASSWORD]?: string;
  [InputField.CONFIRMPASSWORD]?: string;
};

const ProfileForm = ({ initialvalue }: { initialvalue: ProfileDataType }) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [passwordError, setPasswordError] = React.useState<string>('');
  const isLoading = useLoadingToast();
  const methods = useForm<ProfileDataType>({
    defaultValues: initialvalue,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, setValue } = methods;

  const postProfile = (data: ProfileDataType) => {
    toast.promise(
      api.post(`/profile/edit`, data).then(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setValue('name', data.name);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setValue('email', data.email);
        setIsEditing(false);
      }),
      {
        ...DEFAULT_TOAST_MESSAGE,
        success: 'Berhasil! Anda bisa masuk ke akun anda',
      }
    );
    return;
  };

  const onSubmit: SubmitHandler<ProfileDataType> = async (data) => {
    setPasswordError('');
    if (isEditing) {
      if (data.password) {
        if (data.password !== data.confirmpassword) {
          setPasswordError('Password dont match');
          return;
        }
        delete data.confirmpassword;
        postProfile(data);
      } else {
        delete data.password;
        delete data.confirmpassword;
        postProfile(data);
      }
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
        <div className='h-[40rem] flex flex-col px-10 pt-10 pb-4 overflow-clip bg-white rounded-3xl drop-shadow-xl sm:mx-16'>
          <div className='flex flex-col items-center w-full'>
            <div className='relative'>
              <h2 className='font-fivo text-cdark flex text-xl font-extrabold sm:text-3xl'>
                <span className='-skew-x-6'>
                  PERS<span className='font-pilow -translate-y-1'>O</span>NAL
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
                  <span className='font-pilow -translate-y-1'>A</span>TION
                </span>
              </h2>
              <NextImage
                src='/images/ticketing/blue-elips.png'
                width={500}
                height={60}
                alt='sticker'
                quality={100}
                className='absolute -top-4 scale-75 -translate-x-24 sm:scale-100 sm:-translate-x-8'
              />
            </div>
            <p className='text-cdark mt-6 mb-4 text-xs'>
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
              validation={{ required: true }}
              type='text'
              label={
                <>
                  Full Name<span className='text-cred'>*</span>
                </>
              }
              readOnly={isEditing ? false : true}
            />
            <Input
              className='rounded'
              dark={true}
              id={InputField.EMAIL}
              validation={{ required: true, pattern: /^\S+@\S+$/i }}
              type='email'
              label={
                <>
                  Email<span className='text-cred'>*</span>
                </>
              }
              readOnly={isEditing ? false : true}
            />
            <div className={clsx('space-y-4', isEditing ? '' : 'hidden')}>
              <InputPassword
                className='rounded'
                dark={true}
                id={InputField.PASSWORD}
                type='password'
                label={'Password'}
                readOnly={isEditing ? false : true}
              />
              <InputPassword
                className='rounded'
                dark={true}
                id={InputField.CONFIRMPASSWORD}
                type='password'
                label={'Confirm Password'}
                readOnly={isEditing ? false : true}
              />
              <p className='mt-1 text-xs text-red-700'>{passwordError}</p>
            </div>
            <div className='flex flex-grow justify-end items-end'>
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
            className='-z-10 absolute -bottom-48 -right-56 scale-75 sm:-right-32 sm:scale-100'
          />
        </div>
        <div className='flex justify-end'>
          <NextImage
            src='/images/ticketing/red-stripe.png'
            width={40}
            height={40}
            alt='sticker'
            quality={100}
            className='rotate-[225deg] sm:mr-6 sm:rotate-180 sm:-translate-y-3'
          />
        </div>
        <div className='text-cdark flex justify-between mt-12 mb-6 text-xs'>
          <p className='font-medium'>
            <span className='font-black'>TED</span>xITS
          </p>
          <p>&copy; 2022</p>
        </div>
      </div>
    </FormProvider>
  );
};

export default ProfileForm;
