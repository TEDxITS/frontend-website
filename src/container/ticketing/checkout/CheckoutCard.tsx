import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

import { api } from '@/lib/axios';

import Button from '@/components/buttons/Button';
import Input from '@/components/input/Input';
import TextAreaInput from '@/components/input/TextAreaInput';
import Tooltip from '@/components/Tooltip';
import CheckoutSuccess from '@/container/modal/CheckoutSuccessModal';

import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

import SelectLocation from '../SelectLocation';

import { ApiResponse, TicketResponse } from '@/types/api';
import { Event } from '@/types/event';

enum CheckoutInputField {
  'NAME' = 'name',
  'ADDRESS' = 'address',
  'PHONE' = 'phone_number',
  'EVENT' = 'event_id',
  'PAYMENT' = 'payment_id',
  //not send
  'NORUMAH' = 'no_rumah',
  'KODEPOS' = 'kode_pos',
}
type CheckoutApiData = {
  event_id: string;
  payment_id: string;
  type: Event;
  price: number;
  quota: number;
};

type CheckoutDataType = {
  [CheckoutInputField.NAME]: string;
  [CheckoutInputField.PHONE]: string;
  [CheckoutInputField.NORUMAH]: string;
  [CheckoutInputField.KODEPOS]: string;
};

const initialValueCheckout: CheckoutDataType = {
  name: '',
  phone_number: '',
  no_rumah: '',
  kode_pos: '',
};

type CheckoutCardPropsType = {
  data: CheckoutApiData;
};

export default function CheckoutCard({ data }: CheckoutCardPropsType) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [modalData, setModalData] = React.useState<TicketResponse>();

  //#region  //*=========== Form Initialization ===========
  const methods = useForm<CheckoutDataType>({
    defaultValues: initialValueCheckout,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { handleSubmit, reset } = methods;
  //#endregion  //*======== Form Initialization ===========

  //#region  //*=========== Location Component State ===========
  const [autolocation, setAutoLocation] = React.useState<string>('');
  const [isLocationLoading, setIsLocationLoading] =
    React.useState<boolean>(true);
  //#endregion  //*======== Location Component State ===========

  const onSubmit: SubmitHandler<CheckoutDataType> = async (formData) => {
    setIsLoading(true);
    const newData = {
      [CheckoutInputField.NAME]: formData.name,
      [CheckoutInputField.ADDRESS]: `${formData.no_rumah}, ${autolocation}, KODE POS ${formData.kode_pos}`,
      [CheckoutInputField.PHONE]: formData.phone_number,
      [CheckoutInputField.EVENT]: data.event_id,
      [CheckoutInputField.PAYMENT]: data.payment_id,
    };
    try {
      const response = await api.post<ApiResponse<TicketResponse>>(
        `/ticketing/booking`,
        newData
      );
      if (response.data.success) {
        setModalData(response.data.data);
        toast.success('Checkout Success!');
        setIsModalOpen(true);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === '401') {
          toast.error('Your Session is Timeout, please log in again');
          router.push('/login');
        } else {
          toast.error(error.response?.data.message);
        }
      } else {
        toast.error(DEFAULT_TOAST_MESSAGE.error);
      }
    } finally {
      reset();
      setIsLoading(false);
    }
  };
  return (
    <FormProvider {...methods}>
      {isModalOpen && (
        <CheckoutSuccess
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          data={modalData as TicketResponse}
        />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='layout text-cdark flex flex-col gap-8 mt-8'
      >
        <SectionHeader number='01' title="Let's start with your identity!" />
        <Input
          dark={true}
          id={CheckoutInputField.NAME}
          type='text'
          label='Name'
          helperText='Name must consist of at least 3 letters'
          validation={{
            required: true,
            pattern: /[a-zA-Z][a-zA-Z ]{2,}$/g,
          }}
          className='border-cdark border'
        />
        <Input
          dark={true}
          id={CheckoutInputField.PHONE}
          type='number'
          label='Phone Number'
          placeholder='ex: 081234567890'
          helperText='Phone Number must consist of at least 11 number'
          validation={{
            required: true,
            pattern: /^08\d{9,10}$/g,
          }}
          className='border-cdark border'
        />
        <SectionHeader number='02' title='Fill in your Complete Address!' />
        <SelectLocation
          className='text-cdark grid gap-4 lg:grid-cols-2'
          isLoading={isLocationLoading}
          setIsLoading={setIsLocationLoading}
          setLocation={setAutoLocation}
        />
        <TextAreaInput
          dark={true}
          id={CheckoutInputField.NORUMAH}
          helperText='ex : Jl. Sesame Street No.XX'
          label={
            <div className='w-fit'>
              <Tooltip
                position='top-start'
                withUnderline={true}
                spanClassName='flex gap-2'
                content='feel free to include some additional Information!'
              >
                House Number, Street Number, etc
                <HiOutlineExclamationCircle className='text-lg text-primary-600' />
              </Tooltip>
            </div>
          }
          validation={{ required: true }}
          className='border-cdark border'
        />
        <Input
          dark={true}
          type='number'
          id={CheckoutInputField.KODEPOS}
          label='Postal Code'
          validation={{ required: true }}
          className='border-cdark border'
        />{' '}
        <div className='flex flex-col gap-y-2 items-center md:items-end'>
          <Button
            type='submit'
            isLoading={isLoading}
            variant='secondary'
            className='w-fit drop-shadow-md'
          >
            Checkout
          </Button>
          <small className='font-fivo text-cdark'>
            make sure all data that you have input is complete
          </small>
        </div>
      </form>
    </FormProvider>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className=''>
      <p className='text-cdark text-xl font-semibold'>
        <span className='font-sympath'>{number}</span>. {title}
      </p>
      <hr className='border-cdark' />
    </div>
  );
}
