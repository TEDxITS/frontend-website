import clsx from 'clsx';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

export type InputProps = {
  label: React.ReactNode;
  id: string;
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  helperText?: string;
  placeholder?: string;
  validation?: RegisterOptions;
  readOnly?: boolean;
  checkId?: string;
  dark?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;

export default function MailInput({
  id,
  label,
  className,
  type = 'text',
  helperText,
  placeholder = '',
  validation,
  checkId,
  dark = false,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className='flex flex-col gap-2 justify-start md:flex-row'>
      <label
        htmlFor={type === 'checkbox' ? `${id}${checkId}` : id}
        className={clsx(
          'font-fivo text-md block mb-auto italic font-semibold md:text-2xl md:whitespace-nowrap ',
          {
            'text-cdark': dark,
          }
        )}
      >
        {label}
      </label>
      <div className='w-full'>
        <input
          {...register(id, validation)}
          {...rest}
          className={clsx(
            'border-b-cdark font-fivo placeholder-cdark/40 text-cdark p-0 pl-2 w-full bg-transparent border-0 border-b',
            'focus:border-b-cdark/50 focus:ring-0',
            className
          )}
          type={type}
          id={type === 'checkbox' ? `${id}${checkId}` : id}
          name={id}
          aria-describedby={id}
          placeholder={placeholder}
        />
        <div className='mb-1'>
          {helperText && (
            <p
              className={clsx('text-clight mt-1 text-xs', {
                'text-cdark': dark,
              })}
            >
              {helperText}
            </p>
          )}
          {errors[id] && (
            <p
              className={clsx('text-cred mt-1 text-xs', {
                'text-red-700': dark,
              })}
            >
              {errors[id]?.type === 'pattern' && `Please enter valid value}`}
              {errors[id]?.type === 'required' && `This field is required`}
              {errors[id]?.type === 'maxLength' &&
                `Max length of 20 characters exceeded`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
