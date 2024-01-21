import Facilitator from "./Facilitator.json";
import Router from "./Router.json";
import { Abi } from "abitype";
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  11155111: {
    router: {
      address: "0xC2ec9002a652640FEB0Bbf5bf3C500D6e6086B7e",
      abi: Router.abi as Abi,
    },
  },
  43113: {
    facilitator: {
      address: "0x52505Da6034b524eb30cCC5C4978ab4b432a7428",
      abi: Facilitator.abi as Abi,
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
