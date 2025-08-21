# Gamba Platform

> This is a mirrored repo from the [Gamba monorepo](https://github.com/gamba-labs/gamba/tree/main/apps/demo).

An easily customizable Solana casino template featuring multiple on-chain games.

Simply fork the repository, provide your own Solana address, and begin collecting fees on every bet made via your frontend. No liquidity is needed from your end as it is already provided on Gamba.

![Preview](https://github.com/gamba-labs/platform/assets/128392411/1d0fe906-c0e7-4a8d-aa2f-365cf7d3f8f5)

## Features

* Multiple customizable on-chain games

* Custom SPL tokens

* Provably fair results

* Bonuses

## Quick Setup

1. [Fork this repository](https://github.com/gamba-labs/platform/generate).

2. [Connect your forked repo and deploy on Vercel](https://vercel.com/new).

3. Update the values in src/constants.ts

## Environment variables

Configure these variables on your host to enable real plays:

| Variable | Description |
| --- | --- |
| `VITE_REAL_PLAYS_DISABLED` | Set to `true` to force fake-token only mode |
| `VITE_RPC_ENDPOINT` | Custom Solana RPC endpoint |
| `VITE_HELIUS_API_KEY` | When set, a Helius RPC URL is used automatically |

> **Note:** If neither `VITE_RPC_ENDPOINT` nor `VITE_HELIUS_API_KEY` is provided, the app falls back to the public Solana RPC, which is heavily rate limited and may return zero balances. Configure one of the variables above for reliable mainnet access.

## More

[Discord](https://discord.com/invite/xjBsW3e8fK)

[NextJS version by BankkRoll](https://github.com/BankkRoll/Gamba-V2-Next.js)
