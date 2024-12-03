import { createLinkSection } from '../components/linkSection.js';
import { socialLinks, analyticsLinks, tradeLinks, playLinks, infoLinks } from '../data/links.js';

export default function Home() {
  return `
    <div class="relative min-h-screen">
      <div 
        class="absolute inset-0 z-0"
        style="
          background-image: url(https://i.imgur.com/6XHQkmY.png);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          background-color: #000;
        "
      ></div>
      
      <div class="relative z-10 min-h-screen flex flex-col bg-black/50">
        <main class="flex-grow">
          <div class="p-8">
            ${createLinkSection('Socials', socialLinks)}
            ${createLinkSection('Analytics', analyticsLinks)}
            ${createLinkSection('Trade', tradeLinks)}
            ${createLinkSection('Play', playLinks)}
            ${createLinkSection('Info', infoLinks)}
          </div>
        </main>
      </div>
    </div>
  `;
}