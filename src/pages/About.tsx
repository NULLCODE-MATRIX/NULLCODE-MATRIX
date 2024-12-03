import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://i.imgur.com/yywQB3N.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000',
        }}
      />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="p-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-black font-bold"
          >
            <ArrowLeft size={20} className="mr-2 font-bold" />
            Back to Null
          </Link>
        </div>
        
        <div className="flex-grow p-8">
          <div className="max-w-4xl mx-auto">
            <pre className="font-mono text-base md:text-lg lg:text-xl whitespace-pre-wrap text-green-400 text-shadow-lg leading-relaxed">
              {`/**
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
 */`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}