import Facilitator from "./Facilitator.json";
import IAToken from "./IAToken.json";
import IGhoFacilitator from "./IGhoFacilitator.json";
import IGhoToken from "./IGhoToken.json";
import Router from "./Router.json";
import { Abi } from "abitype";
import { erc20ABI } from "wagmi";
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const routerFunctionsToKeep: readonly string[] = [
  "updateGhoulFacilitator",
  "updateGhoulPool",
  "createVault",
  "withdraw",
  "getVaultData",
  "initBorrow",
  "pool",
  "facilitator",
  "destChainSelector",
  "messages",
  "debts",
  "safeTransferFrom",
] as const;
const routerAbi = (Router.abi as Abi).filter(part => {
  if (part.type !== "function") return true;
  if (part.name === "withdraw" && part.inputs.length > 0 && part.inputs[0].name === "_beneficiary") return false;
  return routerFunctionsToKeep.includes(part.name);
});

const facilitatorFunctionsToKeep: readonly string[] = [
  "updateGhoulRouter",
  "repay",
  "destinationChainSelector",
  "ghoulRouter",
] as const;
const facilitatorAbi = (Facilitator.abi as Abi).filter(part => {
  if (part.type !== "function") return true;
  return facilitatorFunctionsToKeep.includes(part.name);
});

const externalContracts = {
  11155111: {
    router: {
      address: "0xC2ec9002a652640FEB0Bbf5bf3C500D6e6086B7e",
      abi: routerAbi,
    },
    aUsdcErc20: {
      address: "0x16dA4541aD1807f4443d92D26044C1147406EB80",
      abi: erc20ABI,
    },
    iATokenUsdc: {
      address: "0x16dA4541aD1807f4443d92D26044C1147406EB80",
      abi: IAToken.abi as Abi,
    },
  },
  43113: {
    facilitator: {
      address: "0x52505Da6034b524eb30cCC5C4978ab4b432a7428",
      abi: facilitatorAbi,
    },
    iFacilitator: {
      address: "0x52505Da6034b524eb30cCC5C4978ab4b432a7428",
      abi: IGhoFacilitator.abi as Abi,
    },
    ghoErc20: {
      address: "0xc7b331f1E6E548493758e00A715F7B256D710E70",
      abi: erc20ABI,
    },
    iGho: {
      address: "0xc7b331f1E6E548493758e00A715F7B256D710E70",
      abi: IGhoToken.abi as Abi,
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
