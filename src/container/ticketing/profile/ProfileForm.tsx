import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Input from '@/components/input/Input';

enum InputField {
  'NAME' = 'name',
  'EMAIL' = 'email',
}

type ProfileDataType = {
  [InputField.NAME]: string;
  [InputField.EMAIL]: string;
};

const profileInitialValue: ProfileDataType = {
  name: '',
  email: '',
};

function ProfileSection() {
  const methods = useForm<ProfileDataType>({
    defaultValues: profileInitialValue,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit } = methods;

  const postData = async (data: ProfileDataType) => {
    try {
      const res = await fetch('endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const msg = await res.json();
      return { success: true, message: msg };
    } catch (error) {
      return { success: false, message: error };
    }
  };

  const submitData = (data: ProfileDataType) => {
    postData(data);
  };

  return (
    <FormProvider {...methods}>
      <div className='layout p-5 my-2'>
        <div className='bg-paper h-[30vw] p-10 bg-cover rounded-md'>
          <h1 className='text-cdark text-3xl'>Personal Information</h1>
          <form
            className='flex flex-col p-4 space-y-4 h-full'
            onSubmit={handleSubmit((data) => submitData(data))}
          >
            <Input
              dark={true}
              id={InputField.NAME}
              label={'Full Name'}
              validation={{ required: true }}
            />
            <Input
              dark={true}
              id={InputField.EMAIL}
              type='email'
              label={'Email'}
              validation={{ required: true, pattern: /^\S+@\S+$/i }}
            />
            <div className='flex flex-grow justify-end items-end'>
              <button
                type='submit'
                className='bg-cdark text-clight px-3 py-2 text-lg rounded-md'
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
}

export default ProfileSection;
