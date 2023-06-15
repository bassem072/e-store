import React from 'react';
import Row from './Row';
import HeaderItem from './Header';
import { useSelector } from 'react-redux';

export default function Table({ headerList, name, setSortBy, setInc }) {
  const admin = useSelector(state => state[name])
  return (
    <div className="w-full flex flex-col">
      <HeaderItem
        data={headerList}
        setInc={setInc}
        setSortBy={setSortBy}
        name={name}
      />
      {admin.list.map((item, index) => (
        <Row key={index} num={index + 1} data={item} columns={headerList} name={name} />
      ))}
    </div>
  );
}
