# TEDxITS 2022 Ticketing Website

page khusus untuk integrasi website ticketing

issue ada di `https://github.com/tedxits2022/frontend-website/issues/48`
documentation backend `https://documenter.getpostman.com/view/18000302/UVkqsawc#e688ff0e-2075-4028-95b1-fc999431d7ef`

## Cara melakukan `get`, `post` request

import modul ini terlebih dahulu

```
import api from '@/lib/axios';
```

contoh melakukan `get` request

```
const response = await api.get<ApiResponse<User>>(`/profile`);
```

contoh melakukan `post` request

```
const data = {
      email: 'halo',
      password: '123',
 };

const response = await api
      .post<ApiResponse<User>>(`/auth/login-account`, data)
      .then((res) => {
        //lakukan sesuatu disini
      });
```

- ApiResponse
  digunakan untuk typing response dari backend yang bentuknya seperti
  ```
  {
  success: boolean;
  message: string;
  data: <apapun data nya nanti>;
  }
  ```
- User
  type ini bisa dibuat baru sesuai kebutuhan API
  seperti yang dilihat pada contoh diatas, bagian `<apapun data nya nanti>` akan di typing dengan type User, jadi misal
  data yang diterima seperti ini
  ```
  {
    "success": true,
    "message": "User verified successfully",
    "data": {
      "token": "aiueo"
    }
  }
  ```
  maka sesuai data yang diterima disini type `<User>` akan berisi
  ```
  export type User = {
    token: string;
  };
  ```

## Cara membuat pages yang `protected`

alias harus `login` terlebih dahulu untuk bisa akses page ini

pakai snippets `npa` atau kodingannya akan seperti ini

```
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { PageWithAuth } from '@/types/auth';

const ProtectedPage: PageWithAuth = () => {
  return (
    <Layout withDashboard={true}>
      <Seo templateTitle='Protected' />

      <main>

        <section className=''>
          <div className='layout py-20 min-h-screen'>
            {/* isi konten nya disini */}
          </div>
        </section>
      </main>
    </Layout>
  )
}

ProtectedPage.permission = 'auth';

export default ProtectedPage;
```

## Cara membuat pages SSR

yaitu melakukan pengambilan data di backend terlebih dahulu, kemudia di `hydrat` ke HTML nya
contoh ada di
`src\pages\dashboard\with-ssr.tsx`

penjelasan :

sertakan fungsi getServerSideProps setelah komponen

```
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  setApiContext(context);
  try {
    const response = await api.get<ApiResponse<User>>(`/profile`);
    return {
      props: { data: response.data.data },
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        props: {
          data: null,
          message: error.response?.data.message as string,
        },
      };
    }
    return {
      props: { data: null },
    };
  }
};

```

fungsi ini akan melakukan get data dari `/profile` kamudian jika sukses, data nya akan di passing ke komponen html kita melalui props seperti ini

```
const WithssrPage: PageWithAuth = ({
//ini props yang didapat dari fungsi getServerSideProps diatas
  data,
  message,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <p>{JSON.stringify(data)}</p>
  );
};
```

## Menambahkan sidebar di layout anda

![image](https://user-images.githubusercontent.com/97293373/163856056-277b4cfb-7366-44c6-af58-b5b03bc63994.png)

contoh ada di
`src\pages\dashboard\with-sidebar.tsx`

```
 <Layout
      withDashboard={true}
      // masukkan warna background, dan styling disini
      className='bg-blob-1 min-h-screen bg-no-repeat bg-cover'
    >
    ...
    ...
 </Layout>
```

pass `withDashboard={true}` di komponen `<Layout>` anda

## Menambahkan toast ketika melakukan fetch data

ketika ingin melakukan submit data atau berhubungan dengan backend, harap menggunakan toast untuk pengalaman user yang lebih baik
disini ada hooks toast
terdapat dua macam toast

1. toast yang dipanggil secara manual
   implementasi ada di `src\container\black-elephant-mail\FormCard.tsx` bagian fungsi `submitData()`

- Sukses

  ```
  toast.success('Apapun pesan sukses anda yippie');
  ```

  panggil ini secara manual dan akan menampilkan notifikasi seperti ini
  ![image](https://user-images.githubusercontent.com/97293373/163857051-4af649fa-fff2-4147-8779-392837ac9a82.png)

- Failed

  ```
  toast.error('Apapun pesan sedih anda hiks');
  ```

  ![image](https://user-images.githubusercontent.com/97293373/163857171-9ec38e6e-233f-4d32-b1cc-565177bba2ba.png)

- Loading
  ```
  toast.loading('lalalala...');
  ```
  jika dipanggil secara manual, harap memanggil `toast.dismiss()` untuk menghentikan loading ketika operasi sudah selesai
  ```
  toast.dismiss();
  ```
  ![image](https://user-images.githubusercontent.com/97293373/163857230-ab5f137f-66b0-4274-9338-b7dfe7b4380b.png)

2. toast yang mengikuti selesainya promise
   implementasi ini ada di `src\pages\login\index.tsx`
   hal ini lebih mudah dilakukan ketika kita akan melakukan fetch data ke `backend` sambil emnunjukkan loading, sukses, dan gagal tanpa memanggil secara manual
   cara nya yaitu

```
import toast from 'react-hot-toast';
```

`toast.promise` akan menerima 2 parameter, parameter pertama yaitu fetch function, parameter kedua yaitu message atau kata2 apa yang akan ditampilkan di toast

```
toast.promise(
    //disini kita lakukan fetch data
    api.post<ApiResponse<User>>(`/auth/login-account`, data).then((res) => {
      login({
        token: res.data.data.token,
      });
    }),
    {
      //disini kita passing kata kata apa saja yang akan ditampilkan di notifikasi toast
      //ini wajib ya
      ...DEFAULT_TOAST_MESSAGE,
      //ada success dan error yang bisa anda tambahkan sendiri sesuai dengan konteks
      success: 'Berhasil! Anda bisa masuk ke akun anda',
    }
  );
```

`toast.promise()` lebih mudah jika andahanya akan melakukan pemanggilan data sekali saja dari satu sumber
