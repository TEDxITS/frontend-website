/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import clsxm from '@/lib/clsxm';

import SelectInput from '@/components/input/SelectInput';

//#region  //*=========== Initial Value ===========
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
}
type LocationInputType = {
  [InputField.PROVINSI]: string;
  [InputField.KABUPATEN]: string;
  [InputField.KECAMATAN]: string;
  [InputField.KELURAHAN]: string;
};

const initialValueCFS: LocationInputType = {
  provinsi: '',
  kabupaten: '',
  kecamatan: '',
  kelurahan: '',
};
//#endregion  //*======== Initial Value ===========

const getLocationValue = (
  data: LocationDataType[] | undefined,
  locationId: string
) => {
  if (!data) {
    return '';
  }
  return data.filter(({ id }) => id === locationId)[0]
    ? data.filter(({ id }) => id === locationId)[0].nama
    : '';
};

type SelectLocationProps = {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
} & React.ComponentPropsWithoutRef<'form'>;

export default function SelectLocation({
  className,
  setLocation,
  isLoading,
  setIsLoading,
}: SelectLocationProps) {
  //#region  //*=========== Data Location State ===========
  const [provinsi, setProvinsi] = React.useState<LocationDataType[]>();
  const [kabupaten, setKabupaten] = React.useState<LocationDataType[]>();
  const [kecamatan, setKecamatan] = React.useState<LocationDataType[]>();
  const [kelurahan, setKelurahan] = React.useState<LocationDataType[]>();
  //#endregion  //*======== Data Location State ===========

  //#region  //*=========== Use Form Hook ===========
  const methods = useForm<LocationInputType>({
    defaultValues: initialValueCFS,
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const { getValues, watch, setValue } = methods;
  //#endregion  //*======== Use Form Hook ===========

  //#region  //*=========== Fetch Function ===========
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
      } finally {
        setIsLoading(false);
      }
    } else {
      return;
    }
  };
  //#endregion  //*======== Fetch Function ===========

  //#region  //*=========== Update Value ===========
  React.useEffect(() => {
    if (!isLoading) {
      setLocation(
        `${getLocationValue(
          kelurahan,
          getValues('kelurahan')
        )}, ${getLocationValue(
          kecamatan,
          getValues('kecamatan')
        )}, ${getLocationValue(
          kabupaten,
          getValues('kabupaten')
        )}, ${getLocationValue(provinsi, getValues('provinsi'))} 
        `
      );
    }
  }, [
    watch('provinsi'),
    watch('kabupaten'),
    watch('kecamatan'),
    watch('kelurahan'),
    isLoading,
  ]);
  //#endregion  //*======== Update Value ===========

  //#region  //*=========== Refetch Data ===========

  React.useEffect(() => {
    fetchProvinsiData();
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    fetchKabupatenData(getValues('provinsi') as string);
  }, [watch('provinsi')]);

  React.useEffect(() => {
    setIsLoading(true);
    fetchKecamatanData(getValues('kabupaten') as string);
  }, [watch('kabupaten')]);

  React.useEffect(() => {
    setIsLoading(true);
    fetchKelurahanData(getValues('kecamatan') as string);
  }, [watch('kecamatan')]);
  //#endregion  //*======== Refetch Data ===========

  return (
    <FormProvider {...methods}>
      <form className={className}>
        <SelectInput
          dark={true}
          id={InputField.PROVINSI}
          label='Provinsi'
          validation={{ required: true }}
          className={clsxm('border border-cdark', {
            'animate-pulse opacity-10 pointer-events-none': isLoading,
          })}
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
          label='Kabupaten/Kota'
          validation={{ required: true }}
          className={clsxm('border border-cdark', {
            'animate-pulse opacity-10 pointer-events-none': isLoading,
          })}
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
          label='Kecamatan'
          validation={{ required: true }}
          className={clsxm('border border-cdark', {
            'animate-pulse opacity-10 pointer-events-none': isLoading,
          })}
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
          label='Kelurahan'
          validation={{ required: true }}
          className={clsxm('border border-cdark', {
            'animate-pulse opacity-10 pointer-events-none': isLoading,
          })}
        >
          {kelurahan?.map(({ id, nama }) => (
            <option value={id} key={id}>
              {nama}
            </option>
          ))}
        </SelectInput>
      </form>
    </FormProvider>
  );
}
