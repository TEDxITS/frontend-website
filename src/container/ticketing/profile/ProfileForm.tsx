import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
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
  name: 'dhana',
  email: 'dhana@gmail.com',
};

function ProfileForm() {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const methods = useForm<ProfileDataType>({
    defaultValues: profileInitialValue,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, setValue } = methods;

  // React.useEffect(() => {
  //   getData().then((data) => {
  //     setValue('name', data.name);
  //     setValue('email', data.email);
  //   });
  // }, [setValue]);

  // const postData = async (data: ProfileDataType) => {
  //   try {
  //     const res = await fetch('endpoint', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     const msg = await res.json();
  //     return { success: true, message: msg };
  //   } catch (error) {
  //     return { success: false, message: error };
  //   }
  // };

  // const getData = async () => {
  //   try {
  //     const res = await fetch('endpoint', { method: 'GET' });
  //     const data = await res.json();
  //     return { success: true, data: data };
  //   } catch (error) {
  //     return { success: false, message: error };
  //   }
  // };

  const submitData = (data: ProfileDataType) => {
    if (isEditing === true) {
      setIsLoading(true);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setValue('name', data.name);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setValue('email', data.email);
      setIsLoading(false);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className='layout my-2 p-5'>
        <div className='bg-clight bg-cover h-[75vh] rounded-md'>
          <div className='bg-paper h-full p-10'>
            <h1 className='text-3xl text-cdark'>Personal Information</h1>
            <form
              className='flex flex-col h-full p-4 space-y-4'
              onSubmit={handleSubmit((data) => submitData(data))}
            >
              <Input
                dark={true}
                id={InputField.NAME}
                type='text'
                label={'Full Name'}
                readOnly={isEditing ? false : true}
              />
              <Input
                dark={true}
                id={InputField.EMAIL}
                type='email'
                label={'Email'}
                readOnly={isEditing ? false : true}
              />
              <div className='flex flex-grow items-end justify-end'>
                <Button type='submit' isLoading={isLoading}>
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default ProfileForm;
