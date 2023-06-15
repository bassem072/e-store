import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Search({ name, setNumberOfRows, setSearch }) {
  const admin = useSelector((state) => state[name]);
  const dispatch = useDispatch();
  const capitalize = (str) => {
    const arr = str.split("_");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  };
  return (
    <div className="w-full flex justify-between items-center text-[15px]">
      <div className="flex items-center gap-2">
        <div>Show</div>
        <select
          className="outline-none border-2 p-1 rounded-lg"
          onChange={(e) => dispatch(setNumberOfRows(e.currentTarget.value))}
          defaultValue={admin.numberOfRows}
        >
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <div>entries</div>
      </div>
      <div className='flex items-center gap-5'>
        <div className="flex items-center gap-2">
          <div>Search:</div>
          <input
            type="text"
            onChange={(e) => dispatch(setSearch(e.currentTarget.value))}
            value={admin.search}
            className="py-1 px-2 outline-none border-2 rounded-sm"
            placeholder="Search"
          />
        </div>
        <Link to={"/dashboard/" + name + "s/add"} className="px-3 py-2 bg-primary  rounded-xl text-white font-semibold">Add {capitalize(name)}</Link>
      </div>
    </div>
  );
}
