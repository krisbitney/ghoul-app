import type { NextPage } from "next";
import {ContractEventHistory} from "~~/app/events/_components/ContractEventHistory";

const Events: NextPage = () => {
    return (
    <>
      <ContractEventHistory />
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Ghoul Finance</h1>
        <p className="text-neutral">You can view Ghoulish event histories here.</p>
      </div>
    </>
  );
};

export default Events;
