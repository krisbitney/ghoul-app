import {ContractName} from "~~/utils/scaffold-eth/contract";
import {useScaffoldEventHistory} from "~~/hooks/scaffold-eth";
import {useNetwork} from "wagmi";
import React, {useMemo} from "react";
import {TransactionHash} from "~~/app/blockexplorer/_components";

interface EventsTableProps {
  contractName: ContractName;
  className?: string;
}

function transformBigIntsToString(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "bigint") {
      result[key] = value.toString();
    } else if (typeof value === "object" && value !== null) {
      result[key] = transformBigIntsToString(value);
    } else {
      result[key] = value;
    }
  }

  return result;
}

export const EventsTable = ({ contractName, className }: EventsTableProps) => {
  const { chain } = useNetwork();

  const fromBlock = chain?.id === 43113 ? 28425664n : 5026623n;

  const { data: messageSentEvents} = useScaffoldEventHistory({
    contractName,
    eventName: "MessageSent",
    fromBlock,
    watch: true,
  });

  const { data: messageReceivedEvents } = useScaffoldEventHistory({
    contractName,
    eventName: "MessageReceived",
    fromBlock,
    watch: true
  });

  const events = useMemo(() => {
    // @ts-ignore
    const allEvents = (messageReceivedEvents || []).concat(messageSentEvents ?? []).map(event => ({
      block: event.log.blockNumber ? Number(event.log.blockNumber) : 0,
      name: event.log.eventName,
      args: transformBigIntsToString(event.log.args),
      hash: event.log.transactionHash,
    }));
    allEvents.sort((a, b) => b.block - a.block);
    return allEvents;
  }, [messageSentEvents, messageReceivedEvents]);

  return (
    <div className={"flex justify-center px-4 md:px-0" + " " + className}>
      <div className="overflow-x-auto w-full shadow-2xl rounded-xl">
        <table className="table text-xl bg-base-100 table-zebra w-full md:table-md table-sm">
          <thead>
            <tr className="rounded-xl text-sm text-base-content">
              <th className="bg-primary">Block Number</th>
              <th className="bg-primary">Event</th>
              <th className="bg-primary">Data</th>
              <th className="bg-primary">Transaction</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event =>
                <tr key={event.hash} className="hover text-sm">
                  <td className="w-1/12 md:py-4">{event.block.toString()}</td>
                  <td className="w-2/12 md:py-4">
                     <span className="mr-1">{event.name}</span>
                  </td>
                  <td className="w-2/1 md:py-4">{JSON.stringify(event.args).replace(/("[^"]+":)/g, "\n$1").replace(/( }$)/g, "\n}")}</td>
                  <td className="w-1/12 md:py-4">
                    <TransactionHash hash={event.hash}/>
                  </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
