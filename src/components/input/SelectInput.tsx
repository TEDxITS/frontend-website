import clsx from 'clsx';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

import clsxm from '@/lib/clsxm';

export type InputProps = {
  label: string;
  id: string;
  children: React.ReactNode;
  dark?: boolean;
  placeholder?: string;
  helperText?: string;
  readOnly?: boolean;
  type?: string;
  className?: string;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<'select'>;

export default function SelectInput({
  id,
  label,
  className,
  helperText,
  placeholder = '',
  dark = false,
  children,
  validation,
  readOnly = false,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // Add disabled and selected attribute to option, will be used if readonly
  const readOnlyChildren = React.Children.map<React.ReactNode, React.ReactNode>(
    children,
    (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          disabled: child.props.value !== rest?.defaultValue,
          // selected: child.props.value === rest?.defaultValue,
        });
      }
    }
  );

  return (
    <div>
      <label
        htmlFor={id}
        className={clsxm('font-fivo text-clight block font-semibold', {
          'text-cdark': dark,
        })}
      >
        {label}
      </label>
      <select
        defaultValue=''
        {...register(id, validation)}
        {...rest}
        name={id}
        id={id}
        className={clsx(
          {
            'cursor-not-allowed bg-primary-200/30': readOnly,
          },
          'bg-clight text-cdark px-4 py-2 w-full placeholder-primary-300 border border-transparent shadow-inner focus:border-primary-900 focus:ring-0',

          className
        )}
        aria-describedby={id}
      >
        {placeholder && (
          <option value='' disabled hidden>
            {placeholder}
          </option>
        )}
        {readOnly ? readOnlyChildren : children}
      </select>
      <div className='mb-1'>
        {helperText && (
          <p className={clsx('text-clight mt-1 text-xs', {})}>{helperText}</p>
        )}
        {errors[id] && (
          <p className={clsx('text-cred mt-1 text-xs', {})}>
            {errors[id]?.type === 'pattern' && `Please enter valid ${label}`}
            {errors[id]?.type === 'required' && `${label} is required`}
          </p>
        )}
      </div>
    </div>
  );
}
