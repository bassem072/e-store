import React from "react";
import Table from "../../../Components/ui/Dashboard/Table";
import Search from "../../../Components/ui/Dashboard/Table/Search";
import { setNumberOfRows, setSearch, setInc, setSortBy } from '../../../slice/admin';

export default function Admins() {
  const headerList = ["name", "email", "registered_at", "gender"];


  return (
    <div className="w-full p-5 bg-white rounded-md flex flex-col gap-10">
      <Search name="admin" setNumberOfRows={setNumberOfRows} setSearch={setSearch} />
      <Table headerList={headerList} name='admin' setInc={setInc} setSortBy={setSortBy} />
    </div>
  );
}
