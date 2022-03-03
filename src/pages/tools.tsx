import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { postLink } from '@/lib/fetch';
import { LinkData } from '@/lib/type/data';

import Button from '@/components/buttons/Button';
import InputGhost from '@/components/input/InputGhost';
import LinkInput from '@/components/input/LinkInput';
import Seo from '@/components/Seo';
import UrlModal from '@/container/modal/UrlModal';

import AboutCircle from '@/assets/svg/AboutCircle';

export default function ToolsPage() {
  const methods = useForm<LinkData>({
    defaultValues: { url: '', shortened: '' },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit } = methods;
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const [shortened, setShortened] = React.useState<string>('');

  const onSubmit = async (data: LinkData) => {
    setIsLoading(true);
    const resData = await postLink(data);
    if (resData.success) {
      setIsOpen(true);
      setIsSuccess(true);
      setShortened(resData.shortened);
      setIsLoading(false);
    } else {
      setIsOpen(true);
      setIsSuccess(false);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Seo templateTitle='Tools' />
      <UrlModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        success={isSuccess}
        shortened={shortened}
      />
      <main>
        <section className='bg-blob-1 bg-cdark bg-cover'>
          <div className='layout flex justify-center items-center py-20 min-h-screen'>
            <div className='gap-x-[calc(100%/12)] grid gap-y-16 md:grid-cols-2'>
              <div className='flex flex-col'>
                <h2 className='relative z-10 mb-1 font-extrabold'>
                  <AboutCircle className='absolute w-48 translate-x-4 -translate-y-4 md:translate-x-16' />
                  <span className='font-normal'>Tools</span> TED
                  <span className='ordinal'>x</span>
                  <span className='font-normal'>ITS</span>
                </h2>
                <p className='mt-8 text-justify'>
                  We provide URL link shortener tools for organize links related
                  to our events, which hosted at{' '}
                  <span className='underline'>
                    tedxits.org/links/YourCustomUrl
                  </span>
                </p>
              </div>
              <FormProvider {...methods}>
                <form
                  onSubmit={handleSubmit((data) => onSubmit(data))}
                  className='flex flex-col gap-4'
                >
                  <LinkInput
                    id={'url'}
                    placeholder={'ex: https://www.google.com/'}
                    label={'Original URL'}
                    helperText='pastikan website diawali dengan https://'
                    validation={{
                      required: true,
                      pattern:
                        /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi,
                    }}
                  />
                  <InputGhost
                    id={'shortened'}
                    label={'tedxits.org/link/'}
                    validation={{ required: true, pattern: /^\S+$/ }}
                  />
                  <div className='ml-auto'>
                    <Button
                      type='submit'
                      className='px-4 py-2 text-sm'
                      isLoading={isLoading}
                    >
                      Generate
                    </Button>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
