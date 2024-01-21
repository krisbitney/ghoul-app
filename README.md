# Ghoul Finance
Ghoul Finance: Revolutionizing DeFi with Cross-Chain Ledning-Borrowing and NFT-based Vaults.

This repo is for the GUI. For the smart contracts and in-depth tutorial, check out https://github.com/Niraj-Kamdar/ghoul

### Description
Ghoul Finance is an innovative DeFi protocol that leverages the idle liquidity across blockchains to create a dynamic borrowing and lending ecosystem. At its core, Ghoul Finance introduces a unique concept where each Vault, representing a user's portfolio of collateral and debt, is an NFT. This NFT-based approach enables the seamless transfer of financial positions between users. The protocol primarily operates across two chains - Sepolia and Fuji, utilizing Chainlink's CCIP for secure cross-chain communication. Borrowers can access liquidity by minting GHO tokens on Fuji, backed by assets in the AAVE pool on Sepolia. Additionally, Ghoul Finance incorporates mechanisms for repayment and liquidation, ensuring a balanced and secure financial environment.

### How It Works
[![](https://mermaid.ink/img/pako:eNqNVMtu2zAQ_JUFe3GA5Ad0CNCmcFOgLyRGT7psqJW9NUUqJJUgDfLvXZqKKVs2UF9MrWZmZ3YJvSrtGlKVCvQ4kNX0mXHtsastyA91dB6-kW3IH1T4ceAG5ZirPfrImnu0Ee7cEMkDhvG0uKfeGcaLOXSJmg3HpJPwk8fFcvjDwsicD3DjCSPBbxxMzLVs6ur6OnepRkgABEvPU2QGXAk0cyr4zjaGAoMfy1VpZQTEdn2my8qjDW3Kh08E0W3JwgJX6f9CHiFuCJ5y73fBB-e9ez4v-dVy5J31PRK-3P7M4gcRCucX-db5LoAkIW_RgN6Q3oYj-GSiFdylDQcJLjY74ZUmqZJtgbPQCIgtRpaz3iCPHiZa81kWqdMCR9EPfJX8nnp86UisuXYaf9r6iPxp8DYTuSkuwine_qKgMXkI6Lel597k_m7POGZ8RTJ20Bgo-RxSJu2MkbpHw393wc_s7Wa3JeAWyPCaHwyB7HEvPCee3uAED713msLJxCVKBR-1pv5gU5Pk_zGskj1d8d4Fnrk96vh-lsVOKepSdeQ72Zd8dV6TQK3kfUe1quTYyFJqVds3weEQ3f2L1aqKfqBLNfRJbvxCqapFE-jtH1RIqRg?type=png)](https://mermaid.live/edit#pako:eNqNVMtu2zAQ_JUFe3GA5Ad0CNCmcFOgLyRGT7psqJW9NUUqJJUgDfLvXZqKKVs2UF9MrWZmZ3YJvSrtGlKVCvQ4kNX0mXHtsastyA91dB6-kW3IH1T4ceAG5ZirPfrImnu0Ee7cEMkDhvG0uKfeGcaLOXSJmg3HpJPwk8fFcvjDwsicD3DjCSPBbxxMzLVs6ur6OnepRkgABEvPU2QGXAk0cyr4zjaGAoMfy1VpZQTEdn2my8qjDW3Kh08E0W3JwgJX6f9CHiFuCJ5y73fBB-e9ez4v-dVy5J31PRK-3P7M4gcRCucX-db5LoAkIW_RgN6Q3oYj-GSiFdylDQcJLjY74ZUmqZJtgbPQCIgtRpaz3iCPHiZa81kWqdMCR9EPfJX8nnp86UisuXYaf9r6iPxp8DYTuSkuwine_qKgMXkI6Lel597k_m7POGZ8RTJ20Bgo-RxSJu2MkbpHw393wc_s7Wa3JeAWyPCaHwyB7HEvPCee3uAED713msLJxCVKBR-1pv5gU5Pk_zGskj1d8d4Fnrk96vh-lsVOKepSdeQ72Zd8dV6TQK3kfUe1quTYyFJqVds3weEQ3f2L1aqKfqBLNfRJbvxCqapFE-jtH1RIqRg)

1. **Vault Creation**: Users create a new Vault on the Router (Sepolia), which then mints a corresponding Vault NFT.

2. **Lending**: Lenders transfer AAVE tokens (aTokens) to their Vault, establishing the collateral.

3. **Borrowing**:
  - The lender initiates a borrowing request for GHO tokens.
  - The Router performs internal checks before requesting the Facilitator (Fuji) to mint GHO tokens.
  - The Facilitator mints GHO tokens directly to the lender on the destination chain.

4. **Repayment**:
  - The lender initiates repayment on the Facilitator.
  - The Facilitator burns the repaid GHO tokens and notifies the Router to mark the repayment.

5. **Liquidation (Not Implemented)**:
  - In cases of undercollateralization, a Liquidator can initiate the liquidation process.
  - The Router verifies eligibility for liquidation and requests the Facilitator to proceed.
  - The Facilitator accepts GHO token repayments and instructs the Router to liquidate the position.
  - The Router completes the liquidation process, affecting the corresponding NFT Vault by transferring the ownership of vault to the liquidator

## Core Technologies
- **Chainlink CCIP**: Enables secure cross-chain communication between Sepolia and Fuji.
- **AAVE Pool on Sepolia**: Acts as the source of collateralized assets.
- **GHO Token on Fuji**: The stablecoin used within the Ghoul Finance ecosystem.
- **Hardhat**: Utilized for developing and demonstrating the protocol.
- **Family ConnectKit**: Makes wallet connection extremely easy in React.
- 

### Environment Variables.
Copy the .env.sample file in packages/nextjs and fill it with your WalletConnect and Alchemy API keys.

## To use
From the repo root:
`nvm use 20 && yarn && yarn start`