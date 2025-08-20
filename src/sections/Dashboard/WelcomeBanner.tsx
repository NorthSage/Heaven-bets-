import React from 'react';
import styled from 'styled-components';
import rocketGif from '../../games/CrashGame/rocket.gif';

const WelcomeWrapper = styled.div`
  /* Animations */
  @keyframes welcome-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Styling */
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  animation: welcome-fade-in 0.5s ease;
  border-radius: 12px; /* Slightly larger radius for a modern look */
  padding: 24px; /* Consistent padding */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px; /* Consistent gap */
  text-align: center;
  filter: drop-shadow(0 4px 3px rgba(0,0,0,.07)) drop-shadow(0 2px 2px rgba(0,0,0,.06));

  /* Desktop styles using a min-width media query */
  @media (min-width: 800px) {
    padding: 40px;
  }
`;

const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.75rem; /* Responsive font size */
    margin: 0 0 8px 0;
    color: #fff;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  h1 img {
    height: 9em;
  }

  p {
    font-size: 1rem;
    color: #fff;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
    margin: 0;
  }

  .proverb {
    margin-top: 12px;
    font-style: italic;
    color: #ffd700;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 2.25rem;
    }
    p {
      font-size: 1.125rem;
    }
  }
`;


export function WelcomeBanner() {
  return (
    <WelcomeWrapper>
        <WelcomeContent>
          <img src="/logo.svg" alt="HALO BETS logo" style={{ height: '120px', marginBottom: '16px' }} />
            <h1>
              Welcome to HALO BETS
              <img src={rocketGif} alt="rocket" />
            </h1>
            <p>The halo home of decentralized play on Solana.</p>
        <p className="proverb">
          Proverbs 16:33: "The lot is cast into the lap, but its every decision is from the Lord".
        </p>
      </WelcomeContent>
    </WelcomeWrapper>
  );
}