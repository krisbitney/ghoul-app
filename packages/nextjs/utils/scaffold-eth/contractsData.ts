import { useMemo } from "react";
import scaffoldConfig from "~~/scaffold.config";
import { ContractName, GenericContract, contracts } from "~~/utils/scaffold-eth/contract";

export function getAllContracts(chainId?: number) {
  const validChainIds: number[] = scaffoldConfig.targetNetworks.map(network => network.id);
  if (chainId === undefined || !validChainIds.includes(chainId)) {
    return {};
  }
  const contractsData = contracts?.[chainId];
  return contractsData ?? {};
}

type ContractInfo = {
  contractsData: { [p: string]: GenericContract };
  contractNames: ContractName[];
};

export function useAllContracts(chainId?: number): ContractInfo {
  return useMemo(() => {
    const contractsData = getAllContracts(chainId);
    const contractNames = Object.keys(contractsData) as ContractName[];
    return { contractsData, contractNames };
  }, [chainId]);
}
