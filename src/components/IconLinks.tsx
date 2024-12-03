import React from 'react';
import { BookOpen, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LinkSectionProps {
  title: string;
  links: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
    internal?: boolean;
  }>;
}

function LinkSection({ title, links }: LinkSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {links.map((link) => {
          const LinkComponent = link.internal ? Link : 'a';
          const linkProps = link.internal ? {
            to: link.href
          } : {
            href: link.href,
            target: "_blank",
            rel: "noopener noreferrer"
          };

          return (
            <LinkComponent
              key={link.href}
              {...linkProps}
              className="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
            >
              <div className="text-white mb-2">
                {link.icon}
              </div>
              <span className="text-white text-sm text-center">{link.label}</span>
            </LinkComponent>
          );
        })}
      </div>
    </div>
  );
}

export function IconLinks() {
  const socialLinks = [
    {
      icon: <img src="https://i.imgur.com/uYHetJ7.png" alt="X" className="w-6 h-6" />,
      href: "https://x.com/NullMatrixAI",
      label: "X"
    },
    {
      icon: <img src="https://i.imgur.com/xEU3Zl3.png" alt="Telegram" className="w-6 h-6" />,
      href: "https://t.me/NULL_PORTAL",
      label: "Telegram"
    },
    {
      icon: <img src="https://i.imgur.com/9mYdWcE.png" alt="CoinGecko" className="w-6 h-6" />,
      href: "https://www.coingecko.com/en/coins/null-matrix",
      label: "CoinGecko"
    }
  ];

  const playLinks = [
    {
      icon: <img src="https://i.imgur.com/6NTACrT.png" alt="Stone" className="w-6 h-6" />,
      href: "https://preview.sixthstone.games/",
      label: "Stone (soon)"
    }
  ];

  const analyticsLinks = [
    {
      icon: <img src="https://i.imgur.com/UNY9VaJ.png" alt="Dexscreener" className="w-6 h-6" />,
      href: "https://dexscreener.com/base/0x2d666f3892ee8eab7aaa5ec8cb9f2e238af170d6",
      label: "Dexscreener"
    },
    {
      icon: <img src="https://i.imgur.com/UNY9VaJ.png" alt="Dexscreener LPs" className="w-6 h-6" />,
      href: "https://dexscreener.com/watchlist/ZAX0s8sqevjGuEezXxqE",
      label: "Dexscreener LPs"
    },
    {
      icon: <img src="https://i.imgur.com/E4KXfA3.png" alt="Dune" className="w-6 h-6" />,
      href: "https://dune.com/nullmatrix/dashboard",
      label: "Dune"
    },
    {
      icon: <img src="https://i.imgur.com/d6zCYPV.png" alt="DeBank" className="w-6 h-6" />,
      href: "https://debank.com/profile/0xe2cf5173b6d1cf7cb66516644b4939649bd0606d",
      label: "DeBank"
    },
    {
      icon: <Search size={24} />,
      href: "https://basescan.org/token/0x0a14ef61AFB32e5CA672E021784f71705aC14908?a=0x0000000000000000000000000000000000000000",
      label: "0x000...000"
    }
  ];

  const tradeLinks = [
    {
      icon: <img src="https://i.imgur.com/kX0MmzZ.png" alt="ODOS" className="w-6 h-6" />,
      href: "https://app.odos.xyz/",
      label: "ODOS"
    },
    {
      icon: <img src="https://i.imgur.com/Dz33bxa.png" alt="Paraswap" className="w-6 h-6" />,
      href: "https://app.paraswap.xyz/#/swap/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE-0x0a14ef61afb32e5ca672e021784f71705ac14908/1/SELL?network=base&version=6.2",
      label: "Paraswap"
    },
    {
      icon: <img src="https://i.imgur.com/WDhx3y7.png" alt="DefiLlama" className="w-6 h-6" />,
      href: "https://swap.defillama.com/?chain=base&tab=swap&to=0x0a14ef61AFB32e5CA672E021784f71705aC14908&from=0x0000000000000000000000000000000000000000",
      label: "DefiLlama"
    }
  ];

  const infoLinks = [
    {
      icon: <span className="text-2xl">∅</span>,
      href: "/about",
      label: "About",
      internal: true
    },
    {
      icon: <BookOpen size={24} />,
      href: "/gametheory",
      label: "Game Theory",
      internal: true
    }
  ];

  return (
    <div className="p-8">
      <LinkSection title="Socials" links={socialLinks} />
      <LinkSection title="Analytics" links={analyticsLinks} />
      <LinkSection title="Trade" links={tradeLinks} />
      <LinkSection title="Play" links={playLinks} />
      <LinkSection title="Info" links={infoLinks} />
    </div>
  );
}