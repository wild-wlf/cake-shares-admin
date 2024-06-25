import React from 'react';
import { Head } from './HeadStyles';
import Field from '@/components/molecules/Field';
import { CiSearch } from 'react-icons/ci';
import Switch from '@/components/molecules/Switch';
import CheckBox from '@/components/molecules/CheckBox';

const PermissionHead = ({ lable }) => {
  return (
    <>
      <Head>
        <Switch onChange={e => console.log(e)} label="Select All" />
        <div className="Search">
          <Field
            type="search"
            rounded
            sm
            name="search"
            placeholder={'Search Permission'}
            prefix={<CiSearch className="icon" />}
          />
        </div>
      </Head>
      <CheckBox label={lable} type="checkbox" />
    </>
  );
};

export default PermissionHead;
