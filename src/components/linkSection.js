export function createLinkSection(title, links) {
  return `
    <div class="mb-8">
      <h2 class="text-white text-xl font-semibold mb-4">${title}</h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        ${links.map(link => `
          <${link.internal ? 'a data-link' : 'a'} 
            href="${link.href}"
            ${!link.internal ? 'target="_blank" rel="noopener noreferrer"' : ''}
            class="flex flex-col items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
          >
            <div class="text-white mb-2">
              ${link.icon}
            </div>
            <span class="text-white text-sm text-center">${link.label}</span>
          </${link.internal ? 'a' : 'a'}>
        `).join('')}
      </div>
    </div>
  `;
}