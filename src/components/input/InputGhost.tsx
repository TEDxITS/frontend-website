import clsx from 'clsx';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

export type InputProps = {
  label: string;
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

export default function InputGhost({
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
    <div className={clsx('flex')}>
      <label
        htmlFor={type === 'checkbox' ? `${id}${checkId}` : id}
        className={clsx('font-fivo text-cgray block mt-3 ')}
      >
        {label}
      </label>
      <div>
        <input
          {...register(id, validation)}
          {...rest}
          className={clsx(
            {
              'cursor-not-allowed bg-primary-200/30': readOnly,
            },
            'border-cgreen placeholder-gray-300/50 px-0 w-full bg-transparent border-0 border-b-2 shadow-inner focus:border-cred focus:ring-0',
            className
          )}
          type={type}
          id={type === 'checkbox' ? `${id}${checkId}` : id}
          name={id}
          aria-describedby={id}
          placeholder={placeholder}
        />
        <div className='my-1'>
          {helperText && (
            <p
              className={clsx('font-fivo text-cgray text-xs', {
                'text-primary-900': dark,
              })}
            >
              {helperText}
            </p>
          )}
          {errors[id] && (
            <span
              className={clsx('font-fivo text-xs text-primary-500', {
                'text-red-700': dark,
              })}
            >
              {errors[id]?.type === 'pattern' && `Please enter valid ${label}`}
              {errors[id]?.type === 'required' &&
                `${label ? label : 'field'} is required`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
