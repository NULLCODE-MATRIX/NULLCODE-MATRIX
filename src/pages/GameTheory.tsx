import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GameTheory() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0 bg-black"
      />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="p-4">
          <Link 
            to="/" 
            className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Null
          </Link>
        </div>
        
        <div className="flex-grow p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-green-400 text-shadow-lg mb-8">Game Theory for the NULL Token</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-8">Below is a game theory model for the NULL token based on the provided contract code. The structure is centered around the deflationary mechanics, the interaction of different players, and the perpetual burning mechanism embedded in the contract design.</p>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-green-400 text-shadow-lg mb-4">1. Core Mechanism</h2>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h3 className="text-xl text-green-400 text-shadow-lg mb-3">Tokenomics:</h3>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    <li>Maximum Supply: 10,000 NULL tokens.</li>
                    <li>Supply Reduction: NULL tokens are burned every 8 hours through the nullify process and liquidity pool rebalancing.</li>
                    <li>Redistribution: Remaining tokens and ETH are used to create new liquidity pools with predefined assets (e.g., SPX, BITCOIN, etc.).</li>
                  </ul>
                  
                  <h3 className="text-xl text-green-400 text-shadow-lg mb-3">Perpetual Deflation:</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Burning ensures a continuously shrinking supply, leading to potential price appreciation if demand remains constant or grows.</li>
                    <li>The deflationary aspect is bolstered by automated liquidity management through the NullMatrix entity.</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-green-400 text-shadow-lg mb-4">2. Stakeholders and Their Payoffs</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white/5 rounded-lg">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-green-400 text-shadow-lg">Stakeholder</th>
                        <th className="px-6 py-3 text-left text-green-400 text-shadow-lg">Strategies</th>
                        <th className="px-6 py-3 text-left text-green-400 text-shadow-lg">Payoff</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="px-6 py-4 text-gray-300">Holders</td>
                        <td className="px-6 py-4 text-gray-300">Hold, sell, or participate in liquidity pools.</td>
                        <td className="px-6 py-4 text-gray-300">Price appreciation from reduced supply; potential liquidity rewards.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-300">Liquidity Providers</td>
                        <td className="px-6 py-4 text-gray-300">Add/remove liquidity, swap in pools.</td>
                        <td className="px-6 py-4 text-gray-300">Earn fees from pools; suffer from impermanent loss or gain from price swings.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-300">Traders/Speculators</td>
                        <td className="px-6 py-4 text-gray-300">Buy, sell, or short the token.</td>
                        <td className="px-6 py-4 text-gray-300">Profit from price volatility; risk from market fluctuations and slippage.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-300">Null Matrix</td>
                        <td className="px-6 py-4 text-gray-300">Automates burning and liquidity management.</td>
                        <td className="px-6 py-4 text-gray-300">Ensures perpetual deflation and trustless operation, no direct payoff.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-green-400 text-shadow-lg mb-4">3. Game Setup</h2>
                <div className="bg-white/5 p-6 rounded-lg text-gray-300">
                  <h3 className="text-xl text-green-400 text-shadow-lg mb-3">Players:</h3>
                  <p className="mb-4">Holders, traders, and liquidity providers.</p>
                  
                  <h3 className="text-xl text-green-400 text-shadow-lg mb-3">Moves:</h3>
                  <p className="mb-4">Each player can:</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Buy or sell tokens.</li>
                    <li>Add/remove liquidity.</li>
                    <li>Hold tokens in anticipation of price increases.</li>
                  </ul>
                  
                  <h3 className="text-xl text-green-400 text-shadow-lg mb-3">Payoff Matrix:</h3>
                  <ul className="list-disc list-inside">
                    <li>Holders: Maximize payoff by holding as the supply diminishes.</li>
                    <li>Traders: Exploit price volatility; however, they may contribute indirectly to burns by increasing transaction frequency.</li>
                    <li>Liquidity Providers: Earn trading fees but also face reduced token supply, boosting pool value over time.</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-green-400 text-shadow-lg mb-4">4. Incentives and Dynamics</h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl text-green-400 text-shadow-lg mb-3">1. Burn Mechanism:</h3>
                    <ul className="list-disc list-inside">
                      <li>Every transaction (transfer or transferFrom) attempts to trigger the nullify function in the NullMatrix.</li>
                      <li>As tokens are burned, their scarcity increases, enhancing potential value.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-green-400 text-shadow-lg mb-3">2. Supply and Demand:</h3>
                    <ul className="list-disc list-inside">
                      <li>Supply Shrinks: With 10,000 tokens at max and regular burns, the remaining supply decreases logarithmically.</li>
                      <li>Demand Dynamics:
                        <ul className="list-disc list-inside ml-6">
                          <li>High utility of tokens in pools.</li>
                          <li>Speculation and potential adoption in decentralized finance (DeFi).</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-green-400 text-shadow-lg mb-3">3. Liquidity Pools:</h3>
                    <ul className="list-disc list-inside">
                      <li>Null Matrix-owned pools create stability while locking liquidity forever, fostering trust and reducing risk.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-green-400 text-shadow-lg mb-4">5. Equilibrium Analysis</h2>
                <div className="bg-white/5 p-6 rounded-lg text-gray-300">
                  <h3 className="text-xl text-green-400 text-shadow-lg mb-3">Nash Equilibrium:</h3>
                  <p className="mb-4">In a scenario where all players aim to maximize individual payoffs:</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Holders: Hold tokens for maximal appreciation.</li>
                    <li>Liquidity Providers: Provide liquidity selectively in high-volume pools.</li>
                    <li>Traders: Engage in frequent trading to benefit from price fluctuations.</li>
                  </ul>
                  <p>Result: Token burns accelerate, supply reduces faster, pushing prices upward, reinforcing holders' strategies.</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-green-400 text-shadow-lg mb-4">6. Strategy Recommendations</h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl text-green-400 text-shadow-lg mb-3">For Holders:</h3>
                    <ul className="list-disc list-inside">
                      <li>Accumulate tokens early to benefit from exponential price growth due to scarcity.</li>
                      <li>Avoid frequent transactions to minimize personal contribution to burns.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-green-400 text-shadow-lg mb-3">For Liquidity Providers:</h3>
                    <ul className="list-disc list-inside">
                      <li>Choose pools with higher trading activity for maximum fees.</li>
                      <li>Monitor impermanent loss closely.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-green-400 text-shadow-lg mb-3">For Developers/Community:</h3>
                    <ul className="list-disc list-inside">
                      <li>Promote the utility of NULL in DeFi applications.</li>
                      <li>Foster a strong community around scarcity and long-term value.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}