/* eslint-disable react/jsx-no-undef */
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import LoaderIllustration from '@/assets/svg/LoaderIllustration';

import { MailInputField } from './FormCard';

//#region  //*=========== Dynamic Import Quill ===========
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <LoaderIllustration className='w-16' />,
});
//#endregion  //*======== Dynamic Import Quill ===========

//#region  //*=========== Options ===========
const modules = {
  toolbar: [
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'cleansd',
];
//#endregion  //*======== Options ===========

export default function TextInput({
  textValue,
  setTextValue,
}: {
  textValue: string;
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  //#region  //*=========== Update Value State ===========
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const updateValue = (e: React.SetStateAction<string>) => {
    setTextValue(e);
    setValue(MailInputField.MESSAGES, e);
  };
  //#endregion  //*======== Update Value State ===========

  return (
    <div className='flex flex-col gap-2'>
      <QuillNoSSRWrapper
        theme='snow'
        value={textValue}
        onChange={updateValue}
        modules={modules}
        formats={formats}
      />
      <div className='mb-1'>
        {errors[MailInputField.MESSAGES] && (
          <p className={clsx('mt-1 text-xs text-red-700')}>
            {errors[MailInputField.MESSAGES]?.type === 'required' &&
              `This field is required`}
          </p>
        )}
      </div>
    </div>
  );
}
