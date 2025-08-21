import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  line-height: 1.6;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  border-radius: 12px;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`

const Subtitle = styled.h3`
  margin-top: 30px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  td, th {
    border: 1px solid rgba(0,0,0,0.1);
    padding: 8px;
  }
  th {
    background: rgba(0,0,0,0.05);
  }
`

export default function Tokenomics() {
  return (
    <Section>
      <img src="/flywheel.gif" alt="Flywheel" style={{ display: 'block', margin: '0 auto 20px', maxWidth: '100%' }} />
      <Title>777Bet Tokenomics — Powered by Heaven’s Flywheel</Title>
      <p>
        Leveraging Heaven’s builder-centric flywheel mechanism, 777Bet transforms gaming fees into automatic buybacks and burns, creating a self-reinforcing cycle of value growth and scarcity.
      </p>

      <Subtitle>How It Works:</Subtitle>
      <p>
        <strong>Everything flows through a dedicated flywheel address</strong><br/>
        Just like any “creator” token on Heaven, 777Bet receives its own flywheel address. Any tokens—or SOL—sent here are immediately converted into 777Bet tokens and burned, reducing total supply and boosting value. <a href="https://docs.heaven.xyz" target="_blank" rel="noreferrer">docs.heaven.xyz</a>
      </p>
      <p>
        <strong>SOL Fees → Buy &amp; Burn</strong><br/>
        Whenever games on 777Bet are played using SOL, the collected fees are routed into the flywheel. These fees are used to buy 777Bet tokens from the market, which are then burned—driving scarcity and long-term price support.
      </p>
      <p>
        <strong>Native Token Fees → Direct Burn</strong><br/>
        When gameplay happens directly in the 777Bet native token, fees sent to the flywheel get burned instantly and programmatically, further reducing circulating supply. <a href="https://docs.heaven.xyz" target="_blank" rel="noreferrer">docs.heaven.xyz</a>
      </p>

      <Subtitle>Why It Matters for 777Bet:</Subtitle>
      <Table>
        <thead>
          <tr>
            <th>Benefit</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consistent Scarcity Growth</td>
            <td>Both fee types—SOL and native token—contribute to supply reduction and long-term token value.</td>
          </tr>
          <tr>
            <td>Built-in Demand &amp; Buy Pressure</td>
            <td>Every SOL denominated game drives buybacks organically, aligning user activity with token appreciation.</td>
          </tr>
          <tr>
            <td>Aligns Community &amp; Platform</td>
            <td>Users play to win—not only are they gaming, but they’re also driving upward momentum in token value.</td>
          </tr>
          <tr>
            <td>Heaven's Proven Infrastructure</td>
            <td>Leveraging a battle-tested, permissionless flywheel system means fewer reinvention pains, more trust, and stronger growth potential.</td>
          </tr>
        </tbody>
      </Table>

    </Section>
  )
}
