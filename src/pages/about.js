export default function About() {
  return `
    <div class="relative min-h-screen">
      <div 
        class="absolute inset-0 z-0"
        style="
          background-image: url(https://i.imgur.com/yywQB3N.jpeg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-color: #000;
        "
      ></div>
      
      <div class="relative z-10 min-h-screen flex flex-col">
        <div class="p-4">
          <a 
            href="/" 
            data-link
            class="inline-flex items-center text-black font-bold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 font-bold"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Back to Null
          </a>
        </div>
        
        <div class="flex-grow p-8">
          <div class="max-w-4xl mx-auto">
            <pre class="font-mono text-base md:text-lg lg:text-xl whitespace-pre-wrap text-green-400 text-shadow-lg leading-relaxed">
/**
 * Null is an experiment. It is not audited. It will have no team.
 * There will only ever be 10,000 NULL tokens maximally.
 * Every 8 hours, the initial NULL pool will be distributed in a round robin fashion.
 * A small portion of the pool will be removed, burning the NULL tokens and creating
 * new NULL pools with other assets.
 *
 * An initial list of 10 assets have been selected:
 * - SPX
 * - BITCOIN
 * - BRETT
 * - DOG
 * - DEGEN
 * - MOG
 * - NPC
 * - AERO
 * - PRIME
 * - VIRTUAL
 *
 * All removed ETH will be utilized to create new NULL/ASSET pools.
 * All pools will be owned by an entity known as the Null Matrix.
 * The Null Matrix will have no owner, and the liquidity will be locked forever.
 * All Null Matrix owned pools will be created on Uniswap V2.
 *
 * Null is a vision for a deflationary, trustless, multi asset beta token.
 */</pre>
          </div>
        </div>
      </div>
    </div>
  `;
}