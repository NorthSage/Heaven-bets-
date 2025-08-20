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
  /* Use a light, cloud-like overlay to better match the sky theme */
  background: rgba(255, 255, 255, 0.4);
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

  img.rocket {
    height: 9em;
    margin-bottom: 8px;
  }

  .proverb {
    margin-top: 12px;
    font-style: italic;
    color: #ffd700;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    font-size: 1.25rem;
  }

  @media (min-width: 800px) {
    .proverb {
      font-size: 1.5rem;
    }
  }
`;


export function WelcomeBanner() {
  return (
    <WelcomeWrapper>
      <WelcomeContent>
        <div style={{ position: 'relative', height: '120px', marginBottom: '16px' }}>
          <img
            src="/01_Heaven_Logo_Reveal_014_Black_600px.gif"
            alt="halo"
            style={{ position: 'absolute', top: '-40px', width: '100%', height: 'auto', pointerEvents: 'none' }}
          />
          <img src="/logo.svg" alt="777BET logo" style={{ height: '100%' }} />
        </div>
        <img src={rocketGif} alt="rocket" className="rocket" />
        <p className="proverb">
          Proverbs 16:33: "The lot is cast into the lap, but its every decision is from the Lord".
        </p>
      </WelcomeContent>
    </WelcomeWrapper>
  );
}