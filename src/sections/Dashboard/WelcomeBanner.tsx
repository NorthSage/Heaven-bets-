import React from 'react';
import styled from 'styled-components';
import rocketGif from '../../games/CrashGame/rocket.gif';

const WelcomeWrapper = styled.div`
  /* Animations */
  @keyframes welcome-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes cloudsMove {
    0% { background-position: 0 0, 0 20%, 0 80%; }
    100% { background-position: 0 0, 1000px 20%, -1000px 80%; }
  }

  /* Styling */
  background-image: linear-gradient(-45deg, #4A90E2, #87CEEB, #5BAAF6, #4A90E2), url('/clouds.svg'), url('/clouds.svg');
  background-repeat: no-repeat, repeat-x, repeat-x;
  background-size: cover, 1200px 600px, 1800px 900px;
  background-position: center, 0 20%, 0 80%;
  animation: welcome-fade-in 0.5s ease, cloudsMove 80s linear infinite;
  border-radius: 12px; /* Slightly larger radius for a modern look */
  padding: 24px; /* Consistent padding */
  display: flex;
  flex-direction: column;
  gap: 24px; /* Consistent gap */
  text-align: center;
  filter: drop-shadow(0 4px 3px rgba(0,0,0,.07)) drop-shadow(0 2px 2px rgba(0,0,0,.06));

  /* Desktop styles using a min-width media query */
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    text-align: left;
    padding: 40px;
    gap: 40px;
  }
`;

const WelcomeContent = styled.div`
  h1 {
    font-size: 1.75rem; /* Responsive font size */
    margin: 0 0 8px 0;
    color: #1a237e;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  h1 img {
    height: 3em;
  }

  p {
    font-size: 1rem;
    color: #1a237ed1;
    margin: 0;
  }

  .proverb {
    margin-top: 12px;
    font-style: italic;
    color: #ffd700;
    text-shadow: 0 0 10px #fff;
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
          <img src="/logo.svg" alt="HALO BETS logo" style={{ height: '80px', marginBottom: '8px' }} />
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