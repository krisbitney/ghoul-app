"use client";

import { useReducer } from "react";
import { useDeployedContractInfo, useNetworkColor } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { ContractName } from "~~/utils/scaffold-eth/contract";
import {EventsTable} from "~~/app/events/_components/EventsTable";

type EventHistoryUIProps = {
    contractName: ContractName;
    className?: string;
};

/**
 * UI component to interface with deployed contracts.
 **/
export const EventHistoryUI = ({ contractName, className = "" }: EventHistoryUIProps) => {
    const [refreshDisplayVariables, triggerRefreshDisplayVariables] = useReducer(value => !value, false);
    const { targetNetwork } = useTargetNetwork();
    const { data: deployedContractData, isLoading: deployedContractLoading } = useDeployedContractInfo(contractName);
    const networkColor = useNetworkColor();

    if (deployedContractLoading) {
        return (
            <div className="mt-14">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!deployedContractData) {
        return (
            <p className="text-3xl mt-14">
                {`No contract found by the name of "${contractName}" on chain "${targetNetwork.name}"!`}
            </p>
        );
    }

    return (<EventsTable contractName={contractName} className={className} />);
};