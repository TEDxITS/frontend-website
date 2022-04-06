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
        className={clsx(
          'font-fivo text-clight block ',

          {
            'text-cdark': dark,
          }
        )}
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
            'bg-clight font-fivo placeholder-cdark/40 text-cdark px-4 py-2 w-full border border-transparent shadow-inner focus:border-primary-900 focus:ring-0'
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />

        <button
          onClick={togglePassword}
          type='button'
          className='flex absolute inset-y-0 right-0 items-center p-1 mr-3 rounded-lg focus:ring focus:ring-primary-500 focus:outline-none'
        >
          {showPassword ? (
            <HiEyeOff className='text-xl text-gray-500 cursor-pointer hover:text-gray-600' />
          ) : (
            <HiEye className='text-xl text-gray-500 cursor-pointer hover:text-gray-600' />
          )}
        </button>
      </div>
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
