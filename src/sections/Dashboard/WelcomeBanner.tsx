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

  .logo-orbit {
    position: relative;
    height: 160px;
    margin-bottom: 16px;
  }

  .rocket-orbit {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    animation: rocket-spin 6s linear infinite;
  }

  .rocket {
    width: 50px;
    height: auto;
    transform: translateX(80px);
  }

  @keyframes rocket-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Tagline = styled.p`
  max-width: 800px;
  line-height: 1.4;
  margin: 0;
`;


export function WelcomeBanner() {
  return (
    <WelcomeWrapper>
      <WelcomeContent>
        <div className="logo-orbit">
          <img
            src="/01_Heaven_Logo_Reveal_014_Black_600px.gif"
            alt="halo"
            style={{ position: 'absolute', top: '-60px', width: '100%', height: 'auto', pointerEvents: 'none' }}
          />
          <img
            src="/logo.svg"
            alt="777BET logo"
            style={{ height: '100%', filter: 'drop-shadow(0 0 4px #ffd700) drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))' }}
          />
          <div className="rocket-orbit">
            <img src={rocketGif} alt="rocket" className="rocket" />
          </div>
        </div>
        <Tagline>
          777Bet is built on Heaven’s flywheel-powered launch infrastructure. Every game played feeds our flywheel: SOL fees are used to buy and burn 777Bet tokens using this mechanism. This creates a powerful, self-reinforcing cycle of scarcity and value growth—where gameplay fuels long-term token appreciation.
        </Tagline>
      </WelcomeContent>
    </WelcomeWrapper>
  );
}
