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
      <div className='layout my-2 p-5'>
        <div className='bg-cover bg-paper h-[30vw] p-10 rounded-md'>
          <h1 className='text-3xl text-cdark'>Personal Information</h1>
          <form
            className='flex flex-col h-full p-4 space-y-4'
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
            <div className='flex flex-grow items-end justify-end'>
              <button
                type='submit'
                className='bg-cdark px-3 py-2 rounded-md text-clight text-lg'
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
