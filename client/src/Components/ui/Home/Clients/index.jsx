import React from "react";
import client1 from "../../../../assets/images/clients/client-1.png";
import client2 from "../../../../assets/images/clients/client-2.png";
import client3 from "../../../../assets/images/clients/client-3.png";
import client4 from "../../../../assets/images/clients/client-4.png";
import client5 from "../../../../assets/images/clients/client-5.png";

export default function Clients() {
  const clients = [client1, client2, client3, client4, client5];
  return (
    <div className="w-full h-fit xl:h-[200px] py-10 bg-slate-200 rounded-3xl flex flex-col xl:flex-row justify-around items-center gap-y-10">
      {clients.map((client, key) => (
        <div key={key} className="h-[40px] opacity-60 hover:opacity-100 transition-all duration-500">
          <img src={client} alt="x" className="h-full" />
        </div>
      ))}
    </div>
  );
}
