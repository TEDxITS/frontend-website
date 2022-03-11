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
} & React.ComponentPropsWithoutRef<'textarea'>;

export default function TextAreaInput({
  id,
  label,
  className,
  type = 'text',
  helperText,
  placeholder = '',
  validation,
  dark = false,
  readOnly = false,
  checkId,
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
      <textarea
        {...register(id, validation)}
        {...rest}
        className={clsx(
          {
            'cursor-not-allowed bg-primary-200/30': readOnly,
          },
          'bg-clight font-fivo placeholder-cdark/40 text-cdark px-4 py-2 w-full border border-transparent shadow-inner focus:border-primary-900 focus:ring-0',
          className
        )}
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
            {errors[id]?.type === 'pattern' && `Please enter valid value`}
            {errors[id]?.type === 'required' && `This field is required`}
          </p>
        )}
      </div>
    </div>
  );
}
