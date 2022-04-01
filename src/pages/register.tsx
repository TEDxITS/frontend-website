import * as React from 'react';

export default function login() {
  return (
    <div className='mx-20 my-10 text-black rounded-md'>
      {/* header */}
      <div className='flex flex-row justify-between items-center mb-5'>
        <p className='font-medium'>Job Postings</p>
        <button className='px-3 py-1 text-white bg-purple-700 rounded-md'>
          Login
        </button>
      </div>
      <hr />
      {/* register */}
      <div className='flex flex-col gap-5 mx-auto my-8 lg:w-1/3'>
        <h2 className='mb-5 font-extrabold text-black'>Register</h2>
        <form
          className='flex flex-col gap-5'
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              name: { value: string };
              email: { value: string };
              password: { value: string };
              repeat_password: { value: string };
            };
            const name = target.name.value;
            const email = target.email.value;
            const password = target.password.value;
            const repeat_password = target.repeat_password.value;
            /* eslint-disable no-console */
            console.log(name, email, password, repeat_password);
            /* eslint-disable no-console */
            target.name.value = '';
            target.email.value = '';
            target.password.value = '';
            target.repeat_password.value = '';
          }}
        >
          <div className='flex flex-col gap-2'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              className='border-slate-400 rounded-md'
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              className='border-slate-400 rounded-md'
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Password</label>
            <input
              required
              type='password'
              name='password'
              className='border-slate-400 rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Repeat Password</label>
            <input
              required
              type='password'
              name='repeat_password'
              className='border-slate-400 rounded-md'
              autoComplete='off'
            />
          </div>
          <button
            type='submit'
            className='py-2 text-white bg-purple-700 rounded-md'
          >
            Register
          </button>
          {/* <input type='submit' value='Register' /> */}
        </form>
        <p className='rounded-mdrounded-md text-indigo-700'>To Login Page</p>
      </div>
    </div>
  );
}
