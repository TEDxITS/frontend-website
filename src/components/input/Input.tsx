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

export default function Input({
  id,
  label,
  className,
  type = 'text',
  helperText,
  placeholder = '',
  validation,
  readOnly = false,
  checkId,
  dark = false,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div
      className={clsx({
        'justify-end flex flex-row-reverse items-center ': type === 'checkbox',
      })}
    >
      <label
        htmlFor={type === 'checkbox' ? `${id}${checkId}` : id}
        className={clsx(
          'font-fivo text-clight block ',
          {
            'text-primary-900': type === 'checkbox',
          },
          {
            'text-cdark': dark,
          }
        )}
      >
        {label}
      </label>
      <input
        {...register(id, validation)}
        {...rest}
        className={clsx(
          'file:-ml-2 file:bg-cdark file:border-0 file:duration-100 file:hover:bg-cred file:mr-2 file:text-clight file:transition-all',
          {
            'cursor-not-allowed bg-primary-200/30': readOnly,
          },
          'bg-clight font-fivo placeholder-cdark/40 text-cdark px-4 py-2 w-full border border-transparent shadow-inner focus:border-primary-900 focus:ring-0',
          {
            'w-6 h-6  checked:bg-teal px-0 py-0 mr-2 ': type === 'checkbox',
          },
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
            {errors[id]?.type === 'size' &&
              `File exceeded maximum size of 2 MB`}
          </p>
        )}
      </div>
    </div>
  );
}
