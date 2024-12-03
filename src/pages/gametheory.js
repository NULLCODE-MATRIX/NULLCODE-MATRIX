export default function GameTheory() {
  return `
    <div class="relative min-h-screen">
      <div class="absolute inset-0 z-0 bg-black"></div>
      
      <div class="relative z-10 min-h-screen flex flex-col">
        <div class="p-4">
          <a 
            href="/" 
            data-link
            class="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Back to Null
          </a>
        </div>
        
        <div class="flex-grow p-8">
          <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold text-green-400 text-shadow-lg mb-8">Game Theory for the NULL Token</h1>
            <div class="prose prose-invert max-w-none">
              <p class="text-gray-300 mb-8">Below is a game theory model for the NULL token based on the provided contract code. The structure is centered around the deflationary mechanics, the interaction of different players, and the perpetual burning mechanism embedded in the contract design.</p>
              
              <section class="mb-12">
                <h2 class="text-2xl font-semibold text-green-400 text-shadow-lg mb-4">1. Core Mechanism</h2>
                <div class="bg-white/5 p-6 rounded-lg">
                  <h3 class="text-xl text-green-400 text-shadow-lg mb-3">Tokenomics:</h3>
                  <ul class="list-disc list-inside text-gray-300 mb-4">
                    <li>Maximum Supply: 10,000 NULL tokens.</li>
                    <li>Supply Reduction: NULL tokens are burned every 8 hours through the nullify process and liquidity pool rebalancing.</li>
                    <li>Redistribution: Remaining tokens and ETH are used to create new liquidity pools with predefined assets (e.g., SPX, BITCOIN, etc.).</li>
                  </ul>
                  
                  <h3 class="text-xl text-green-400 text-shadow-lg mb-3">Perpetual Deflation:</h3>
                  <ul class="list-disc list-inside text-gray-300">
                    <li>Burning ensures a continuously shrinking supply, leading to potential price appreciation if demand remains constant or grows.</li>
                    <li>The deflationary aspect is bolstered by automated liquidity management through the NullMatrix entity.</li>
                  </ul>
                </div>
              </section>

              <section class="mb-12">
                <h2 class="text-2xl font-semibold text-green-400 text-shadow-lg mb-4">2. Stakeholders and Their Payoffs</h2>
                <div class="overflow-x-auto">
                  <table class="min-w-full bg-white/5 rounded-lg">
                    <thead>
                      <tr>
                        <th class="px-6 py-3 text-left text-green-400 text-shadow-lg">Stakeholder</th>
                        <th class="px-6 py-3 text-left text-green-400 text-shadow-lg">Strategies</th>
                        <th class="px-6 py-3 text-left text-green-400 text-shadow-lg">Payoff</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-white/10">
                      <tr>
                        <td class="px-6 py-4 text-gray-300">Holders</td>
                        <td class="px-6 py-4 text-gray-300">Hold, sell, or participate in liquidity pools.</td>
                        <td class="px-6 py-4 text-gray-300">Price appreciation from reduced supply; potential liquidity rewards.</td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 text-gray-300">Liquidity Providers</td>
                        <td class="px-6 py-4 text-gray-300">Add/remove liquidity, swap in pools.</td>
                        <td class="px-6 py-4 text-gray-300">Earn fees from pools; suffer from impermanent loss or gain from price swings.</td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 text-gray-300">Traders/Speculators</td>
                        <td class="px-6 py-4 text-gray-300">Buy, sell, or short the token.</td>
                        <td class="px-6 py-4 text-gray-300">Profit from price volatility; risk from market fluctuations and slippage.</td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 text-gray-300">Null Matrix</td>
                        <td class="px-6 py-4 text-gray-300">Automates burning and liquidity management.</td>
                        <td class="px-6 py-4 text-gray-300">Ensures perpetual deflation and trustless operation, no direct payoff.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section class="mb-12">
                <h2 class="text-2xl font-semibold text-green-400 text-shadow-lg mb-4">3. Game Setup</h2>
                <div class="bg-white/5 p-6 rounded-lg text-gray-300">
                  <h3 class="text-xl text-green-400 text-shadow-lg mb-3">Players:</h3>
                  <p class="mb-4">Holders, traders, and liquidity providers.</p>
                  
                  <h3 class="text-xl text-green-400 text-shadow-lg mb-3">Moves:</h3>
                  <p class="mb-4">Each player can:</p>
                  <ul class="list-disc list-inside mb-4">
                    <li>Buy or sell tokens.</li>
                    <li>Add/remove liquidity.</li>
                    <li>Hold tokens in anticipation of price increases.</li>
                  </ul>
                  
                  <h3 class="text-xl text-green-400 text-shadow-lg mb-3">Payoff Matrix:</h3>
                  <ul class="list-disc list-inside">
                    <li>Holders: Maximize payoff by holding as the supply diminishes.</li>
                    <li>Traders: Exploit price volatility; however, they may contribute indirectly to burns by increasing transaction frequency.</li>
                    <li>Liquidity Providers: Earn trading fees but also face reduced token supply, boosting pool value over time.</li>
                  </ul>
                </div>
              </section>

              <section class="mb-12">
                <h2 class="text-2xl font-semibold text-green-400 text-shadow-lg mb-4">4. Incentives and Dynamics</h2>
                <div class="space-y-6 text-gray-300">
                  <div>
                    <h3 class="text-xl text-green-400 text-shadow-lg mb-3">1. Burn Mechanism:</h3>
                    <ul class="list-disc list-inside">
                      <li>Every transaction (transfer or transferFrom) attempts to trigger the nullify function in the NullMatrix.</li>
                      <li>As tokens are burned, their scarcity increases, enhancing potential value.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 class="text-xl text-green-400 text-shadow-lg mb-3">2. Supply and Demand:</h3>
                    <ul class="list-disc list-inside">
                      <li>Supply Shrinks: With 10,000 tokens at max and regular burns, the remaining supply decreases logarithmically.</li>
                      <li>Demand Dynamics:
                        <ul class="list-disc list-inside ml-6">
                          <li>High utility of tokens in pools.</li>
                          <li>Speculation and potential adoption in decentralized finance (DeFi).</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 class="text-xl text-green-400 text-shadow-lg mb-3">3. Liquidity Pools:</h3>
                    <ul class="list-disc list-inside">
                      <li>Null Matrix-owned pools create stability while locking liquidity forever, fostering trust and reducing risk.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section class="mb-12">
                <h2 class="text-2xl font-semibold text-green-400 text-shadow-lg mb-4">5. Equilibrium Analysis</h2>
                <div class="bg-white/5 p-6 rounded-lg text-gray-300">
                  <h3 class="text-xl text-green-400 text-shadow-lg mb-3">Nash Equilibrium:</h3>
                  <p class="mb-4">In a scenario where all players aim to maximize individual payoffs:</p>
                  <ul class="list-disc list-inside mb-4">
                    <li>Holders: Hold tokens for maximal appreciation.</li>
                    <li>Liquidity Providers: Provide liquidity selectively in high-volume pools.</li>
                    <li>Traders: Engage in frequent trading to benefit from price fluctuations.</li>
                  </ul>
                  <p>Result: Token burns accelerate, supply reduces faster, pushing prices upward, reinforcing holders' strategies.</p>
                </div>
              </section>

              <section class="mb-12">
                <h2 class="text-2xl font-semibold text-green-400 text-shadow-lg mb-4">6. Strategy Recommendations</h2>
                <div class="space-y-6 text-gray-300">
                  <div>
                    <h3 class="text-xl text-green-400 text-shadow-lg mb-3">For Holders:</h3>
                    <ul class="list-disc list-inside">
                      <li>Accumulate tokens early to benefit from exponential price growth due to scarcity.</li>
                      <li>Avoid frequent transactions to minimize personal contribution to burns.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 class="text-xl text-green-400 text-shadow-lg mb-3">For Liquidity Providers:</h3>
                    <ul class="list-disc list-inside">
                      <li>Choose pools with higher trading activity for maximum fees.</li>
                      <li>Monitor impermanent loss closely.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 class="text-xl text-green-400 text-shadow-lg mb-3">For Developers/Community:</h3>
                    <ul class="list-disc list-inside">
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
  `;
}