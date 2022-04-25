import clsx from 'clsx';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

export type InputProps = {
  /** Input label */
  label: React.ReactNode;
  /**
   * id to be initialized with React Hook Form,
   * must be the same with the pre-defined types.
   */
  id: string;
  /** Input placeholder */
  placeholder?: string;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /**
   * Input type
   * @example text, email, password
   */
  type?: React.HTMLInputTypeAttribute;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
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
            'cursor-not-allowed bg-gray-300': readOnly,
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
        readOnly={readOnly}
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
            {errors[id]?.type === 'required'
              ? `This field is required`
              : errors[id]?.type === 'pattern' && `Please enter valid value`}
            {errors[id]?.type === 'size' &&
              `File exceeded maximum size of 2 MB`}
          </p>
        )}
      </div>
    </div>
  );
}
