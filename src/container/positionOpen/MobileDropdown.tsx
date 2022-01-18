import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import * as React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import clsxm from '@/lib/clsxm';

import { menuSection } from '@/data/position';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';

type MobileDropdownProps = {
  setActive: React.Dispatch<React.SetStateAction<string>>;
  linkActive: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function MobileDropdown({
  linkActive,
  setActive,
  className,
}: MobileDropdownProps) {
  return (
    <div
      className={clsxm(
        'bg-cdark sticky top-4 z-30 p-2 mx-4 w-full text-right rounded-lg shadow-md backdrop-blur-lg',

        className
      )}
    >
      <Menu as='div'>
        <div className='flex relative gap-4 justify-between items-center'>
          <Button className='px-4 py-2 text-sm font-medium rounded-md'>
            Register
          </Button>
          <Menu.Button className='bg-cgray font-fivo text-cdark inline-flex justify-center px-4 py-2 w-full text-sm font-medium rounded-md hover:bg-cgreen hover:text-cgray focus:outline-none'>
            Volunteer Options
            <FaChevronDown
              className='-mr-1 ml-2 w-5 h-5 text-primary-200 hover:text-cgray'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='bg-cgray absolute right-0 mt-2 w-56 rounded-md divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none'>
            <div className='px-1 py-1'>
              {menuSection.map(({ href, title }, i) => (
                <Menu.Item key={i} as='div' className='flex flex-col gap-2'>
                  <UnstyledLink
                    onClick={() => setActive(href)}
                    key={href}
                    href={`#${href}`}
                    className={clsxm(
                      'bg-cdark ease font-fivo px-4 py-2 text-left transition-all duration-500',
                      {
                        '': href === linkActive,
                        'text-cdark  bg-opacity-0': href !== linkActive,
                      }
                    )}
                  >
                    {title}
                  </UnstyledLink>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
