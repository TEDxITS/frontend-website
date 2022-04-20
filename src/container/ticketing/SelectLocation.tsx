/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Input from '@/components/input/Input';
import SelectInput from '@/components/input/SelectInput';
import TextAreaInput from '@/components/input/TextAreaInput';

const PROVINSI_URL = 'https://ibnux.github.io/data-indonesia/provinsi.json';
const KABUPATEN_URL = 'https://ibnux.github.io/data-indonesia/kabupaten/';
const KECAMATAN_URL = 'https://ibnux.github.io/data-indonesia/kecamatan/';
const KELURAHAN_URL = 'https://ibnux.github.io/data-indonesia/kelurahan/';

type LocationDataType = {
  id: string;
  nama: string;
};
enum InputField {
  'PROVINSI' = 'provinsi',
  'KABUPATEN' = 'kabupaten',
  'KECAMATAN' = 'kecamatan',
  'KELURAHAN' = 'kelurahan',
  'ALAMAT' = 'alamat',
  'KODEPOS' = 'kodepos',
}
type LocationInputType = {
  [InputField.PROVINSI]: string;
  [InputField.KABUPATEN]: string;
  [InputField.KECAMATAN]: string;
  [InputField.KELURAHAN]: string;
  [InputField.ALAMAT]: string;
  [InputField.KODEPOS]: string;
};

const initialValueCFS: LocationInputType = {
  provinsi: '',
  kabupaten: '',
  kecamatan: '',
  kelurahan: '',
  alamat: '',
  kodepos: '',
};

export default function SelectLocation() {
  const [provinsi, setProvinsi] = React.useState<LocationDataType[]>();
  const [kabupaten, setKabupaten] = React.useState<LocationDataType[]>();
  const [kecamatan, setKecamatan] = React.useState<LocationDataType[]>();
  const [kelurahan, setKelurahan] = React.useState<LocationDataType[]>();

  const methods = useForm<LocationInputType>({
    defaultValues: initialValueCFS,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, reset, getValues, watch, setValue } = methods;

  const fetchProvinsiData = async () => {
    try {
      const res = await fetch(PROVINSI_URL);
      const data = await res.json();
      setProvinsi(data);
      if (data[0].id) {
        setValue('provinsi', data[0].id as never);
      }
    } catch (error) {
      return;
    }
  };

  const fetchKabupatenData = async (id: string) => {
    if (id.length > 0) {
      try {
        const res = await fetch(`${KABUPATEN_URL}${id}.json`);
        const data: LocationDataType[] = await res.json();
        setKabupaten(data);
        if (data[0].id) {
          setValue('kabupaten', data[0].id as never);
        }
      } catch (error) {
        return;
      }
    } else {
      return;
    }
  };

  const fetchKecamatanData = async (id: string) => {
    if (id.length > 0) {
      try {
        const res = await fetch(`${KECAMATAN_URL}${id}.json`);
        const data: LocationDataType[] = await res.json();
        setKecamatan(data);
        if (data[0].id) {
          setValue('kecamatan', data[0].id as never);
        }
      } catch (error) {
        return;
      }
    } else {
      return;
    }
  };

  const fetchKelurahanData = async (id: string) => {
    if (id.length > 0) {
      try {
        const res = await fetch(`${KELURAHAN_URL}${id}.json`);
        const data: LocationDataType[] = await res.json();
        setKelurahan(data);
        if (data[0].id) {
          setValue('kelurahan', data[0].id as never);
        }
      } catch (error) {
        return;
      }
    } else {
      return;
    }
  };

  React.useEffect(() => {
    console.log(
      `${getValues('provinsi')} ${getValues('kabupaten')} ${getValues(
        'kecamatan'
      )} ${getValues('kelurahan')}`
    );
  }, [
    watch('provinsi'),
    watch('kabupaten'),
    watch('kecamatan'),
    watch('kelurahan'),
  ]);

  React.useEffect(() => {
    fetchProvinsiData();
  }, []);

  React.useEffect(() => {
    fetchKabupatenData(getValues('provinsi') as string);
  }, [watch('provinsi')]);

  React.useEffect(() => {
    fetchKecamatanData(getValues('kabupaten') as string);
  }, [watch('kabupaten')]);

  React.useEffect(() => {
    fetchKelurahanData(getValues('kecamatan') as string);
  }, [watch('kecamatan')]);

  const submitData = async (data: LocationInputType) => {
    /* eslint-disable no-console */
    console.log(data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(submitData)}
          className='w-[calc(100%-4rem)] flex flex-col gap-8 sm:w-full'
        >
          <div className='grid gap-y-4 mx-0 sm:mx-24'>
            <SelectInput
              dark={true}
              id={InputField.PROVINSI}
              label='Provinsi'
              validation={{ required: true }}
              className={'border border-cdark'}
            >
              {provinsi?.map(({ id, nama }) => (
                <option value={id} key={id}>
                  {nama}
                </option>
              ))}
            </SelectInput>
            <SelectInput
              dark={true}
              id={InputField.KABUPATEN}
              label='Kabupaten'
              validation={{ required: true }}
              className={'border border-cdark'}
            >
              {kabupaten?.map(({ id, nama }) => (
                <option value={id} key={id}>
                  {nama}
                </option>
              ))}
            </SelectInput>
            <SelectInput
              dark={true}
              id={InputField.KECAMATAN}
              label='kecamatan'
              validation={{ required: true }}
              className={'border border-cdark'}
            >
              {kecamatan?.map(({ id, nama }) => (
                <option value={id} key={id}>
                  {nama}
                </option>
              ))}
            </SelectInput>
            <SelectInput
              dark={true}
              id={InputField.KELURAHAN}
              label='kelurahan'
              validation={{ required: true }}
              className={'border border-cdark'}
            >
              {kelurahan?.map(({ id, nama }) => (
                <option value={id} key={id}>
                  {nama}
                </option>
              ))}
            </SelectInput>
            <TextAreaInput
              dark={true}
              id={InputField.ALAMAT}
              label='No Rumah, Jl, Blok, etc'
              validation={{ required: true }}
              className={'border border-cdark'}
            />
            <Input
              dark={true}
              id={InputField.KODEPOS}
              type='number'
              label='Kode Pos'
              validation={{ required: true }}
              className={'border border-cdark'}
            />
          </div>
          <div className='flex relative justify-center mx-0 mt-4 sm:mx-24'></div>
        </form>
      </FormProvider>
    </div>
  );
}
