// src/constants/Games.tsx
import { GameBundle } from 'gamba-react-ui-v2';
import React from 'react';

export interface ExtendedGameBundle extends GameBundle {
  meta: GameBundle['meta'] & {
    /** optional badge/tag to show on the card */
    tag?: string;
  };
}

export const GAMES: ExtendedGameBundle[] = [
  {
    id: 'dice',
    meta: {
      background: '#ff6490',
      name: 'Dice',
      image: '/games/dice.png',
      description: `
        Dice challenges players to predict the outcome of a roll with a unique twist. Select a number and aim to roll below it to win. Adjusting your choice affects potential payouts, balancing risk and reward for an engaging experience.
      `,
    },
    app: React.lazy(() => import('./Dice')),
  },
  {
    id: 'slots',
    meta: {
      background: '#5465ff',
      name: 'Slots',
      image: '/games/slots.png',
      description: `
        Slots is the quintessential game of luck and anticipation. Spin the reels and match symbols to win, with potential rewards displayed upfront. A fair and exciting game, Slots offers a classic casino experience tailored for digital enjoyment.
      `,
    },
    app: React.lazy(() => import('./Slots')),
  },
  {
    id: 'flip',
    meta: {
      background: '#ffe694',
      name: 'Flip',
      image: '/games/flip.png',
      description: `
        Flip offers a straightforward yet thrilling gamble: choose Heads or Tails and double your money or lose it all. This simple, high-stakes game tests your luck and decision-making with every flip of the coin.
      `,
    },
    app: React.lazy(() => import('./Flip')),
  },
  {
    id: 'crash',
    meta: {
      background: '#de95e8',
      name: 'Crash',
      image: '/games/crash.png',
      description: `
        Predict a multiplier target and watch a rocket attempt to reach it. If the rocket crashes before the target, the player loses; if it reaches or exceeds the target, the player wins.
      `,
    },
    app: React.lazy(() => import('./CrashGame')),
  },
];
