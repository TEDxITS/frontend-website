import clsx from 'clsx';
import { useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export type InputPasswordProps = {
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
  dark?: boolean;
  patternMessage?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function InputPassword({
  label,
  placeholder = '',
  helperText,
  id,
  readOnly = false,
  validation,
  dark = false,
  patternMessage = '',
  ...rest
}: InputPasswordProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div>
      <label
        htmlFor={id}
        className={clsx('block font-fivo text-clight ', {
          'text-cdark': dark,
        })}
      >
        {label}
      </label>
      <div className='relative'>
        <input
          {...register(id, validation)}
          {...rest}
          type={showPassword ? 'text' : 'password'}
          name={id}
          id={id}
          readOnly={readOnly}
          className={clsx(
            {
              'cursor-not-allowed bg-primary-200/30': readOnly,
            },
            'bg-clight border border-transparent font-fivo placeholder-cdark/40 px-4 py-2 rounded-md shadow-inner text-cdark w-full focus:border-primary-900 focus:ring-0'
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />

        <button
          onClick={togglePassword}
          type='button'
          className='absolute flex inset-y-0 items-center mr-3 p-1 right-0 rounded-lg focus:outline-none focus:ring focus:ring-primary-500'
        >
          {showPassword ? (
            <HiEyeOff className='cursor-pointer text-gray-500 text-xl hover:text-gray-600' />
          ) : (
            <HiEye className='cursor-pointer text-gray-500 text-xl hover:text-gray-600' />
          )}
        </button>
      </div>
      <div className='mb-1'>
        {helperText && (
          <p
            className={clsx('mt-1 text-clight text-xs', {
              'text-cdark': dark,
            })}
          >
            {helperText}
          </p>
        )}
        {errors[id] && (
          <p
            className={clsx('mt-1 text-cred text-xs', {
              'text-red-700': dark,
            })}
          >
            {errors[id]?.type === 'required'
              ? `This field is required`
              : errors[id]?.type === 'pattern' && patternMessage
              ? patternMessage
              : `Please enter valid value`}
            {errors[id]?.type === 'size' &&
              `File exceeded maximum size of 2 MB`}
          </p>
        )}
      </div>
    </div>
  );
}
