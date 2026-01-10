function generateTrophy(data, theme) {
  const displayName = data.name || "GitHub User";

  // 1. NEON THEME
  const neonTheme = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#0f2027;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#203a43;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2c5364;stop-opacity:1" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
        <style>
          .title { font-family: sans-serif; font-weight: bold; font-size: 22px; fill: white; letter-spacing: 2px; text-transform: uppercase; }
          .stat-label { font-family: sans-serif; font-size: 14px; fill: #aeaeae; text-transform: uppercase; letter-spacing: 1px; }
          .stat-number { font-family: sans-serif; font-weight: 800; font-size: 40px; fill: white; }
          .fade-in { animation: fadeIn 2s ease-in-out; }
          .pulse { animation: pulse 3s infinite alternate; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes pulse { 0% { transform: scale(1); transform-origin: center; } 100% { transform: scale(1.05); transform-origin: center; } }
        </style>
      </defs>
      <rect x="10" y="10" width="780" height="230" rx="15" fill="url(#bgGradient)" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
      <text x="400" y="50" text-anchor="middle" class="title">⚡ ${displayName.toUpperCase()} STATS ⚡</text>
      <line x1="200" y1="65" x2="600" y2="65" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <g transform="translate(50, 90)">
        <rect x="0" y="0" width="160" height="110" rx="10" fill="rgba(0,0,0,0.3)" stroke="#00ffcc" stroke-width="2"/>
        <text x="80" y="35" text-anchor="middle" class="stat-label" fill="#00ffcc">Active Days</text>
        <text x="80" y="80" text-anchor="middle" class="stat-number fade-in">${data.active_days}</text>
      </g>
      <g transform="translate(290, 80)">
        <rect class="pulse" x="0" y="0" width="220" height="130" rx="12" fill="rgba(0,0,0,0.5)" stroke="#ff00cc" stroke-width="3" filter="url(#glow)"/>
        <text x="110" y="40" text-anchor="middle" class="stat-label" fill="#ff00cc">Contributions</text>
        <text x="110" y="90" text-anchor="middle" class="stat-number fade-in" style="font-size: 50px;">${data.total_contributions}</text>
      </g>
      <g transform="translate(590, 90)">
        <rect x="0" y="0" width="160" height="110" rx="10" fill="rgba(0,0,0,0.3)" stroke="#ff5e00" stroke-width="2"/>
        <text x="80" y="35" text-anchor="middle" class="stat-label" fill="#ff5e00">Current Streak</text>
        <text x="80" y="80" text-anchor="middle" class="stat-number fade-in">${data.current_streak}</text>
      </g>
    </svg>`;

  // 2. CYBERPUNK THEME
  const cyberpunkTheme = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
      <rect width="800" height="250" fill="#000" />
      <rect x="10" y="10" width="780" height="230" rx="15" fill="#050505" stroke="#00f3ff" stroke-width="3"/>
      <text x="400" y="55" text-anchor="middle" font-family="monospace" font-size="24" font-weight="bold" fill="#00f3ff" style="letter-spacing: 3px;">{ ${displayName.toUpperCase()} }</text>
      <g transform="translate(50, 95)">
        <rect width="160" height="110" rx="5" fill="rgba(255, 0, 153, 0.1)" stroke="#ff0099" stroke-width="2"/>
        <text x="80" y="35" text-anchor="middle" font-family="monospace" font-size="14" fill="#ff0099">ACTIVE_DAYS</text>
        <text x="80" y="85" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="40" fill="#fff">${data.active_days}</text>
      </g>
      <g transform="translate(290, 85)">
        <rect width="220" height="130" rx="5" fill="rgba(0, 243, 255, 0.1)" stroke="#00f3ff" stroke-width="2"/>
        <text x="110" y="40" text-anchor="middle" font-family="monospace" font-size="14" fill="#00f3ff">TOTAL_CONTRIBS</text>
        <text x="110" y="95" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="50" fill="#fff">${data.total_contributions}</text>
      </g>
      <g transform="translate(590, 95)">
        <rect width="160" height="110" rx="5" fill="rgba(249, 240, 2, 0.1)" stroke="#f9f002" stroke-width="2"/>
        <text x="80" y="35" text-anchor="middle" font-family="monospace" font-size="14" fill="#f9f002">CURR_STREAK</text>
        <text x="80" y="85" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="40" fill="#fff">${data.current_streak}</text>
      </g>
    </svg>`;

  // 3. GOLD THEME
  const goldTheme = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
      <rect width="800" height="250" fill="#111" />
      <rect x="10" y="10" width="780" height="230" rx="15" fill="none" stroke="#d4af37" stroke-width="4"/>
      <text x="400" y="55" text-anchor="middle" font-family="serif" font-size="28" font-style="italic" fill="#d4af37">${displayName} Showcase</text>
      <g transform="translate(50, 95)">
        <text x="80" y="30" text-anchor="middle" font-family="serif" font-size="16" fill="#d4af37">Active Days</text>
        <text x="80" y="85" text-anchor="middle" font-family="serif" font-weight="bold" font-size="45" fill="#fff">${data.active_days}</text>
      </g>
      <g transform="translate(290, 85)">
        <circle cx="110" cy="65" r="60" fill="none" stroke="#d4af37" stroke-width="2" stroke-dasharray="10 5"/>
        <text x="110" y="40" text-anchor="middle" font-family="serif" font-size="16" fill="#d4af37">Contributions</text>
        <text x="110" y="90" text-anchor="middle" font-family="serif" font-weight="bold" font-size="55" fill="#fff">${data.total_contributions}</text>
      </g>
      <g transform="translate(590, 95)">
        <text x="80" y="30" text-anchor="middle" font-family="serif" font-size="16" fill="#d4af37">Streak</text>
        <text x="80" y="85" text-anchor="middle" font-family="serif" font-weight="bold" font-size="45" fill="#fff">${data.current_streak}</text>
      </g>
    </svg>`;

  // 4. SAKURA THEME
  const sakuraTheme = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
      <defs>
        <linearGradient id="sakura_grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2d1b33;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a0f1d;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="800" height="250" rx="15" fill="url(#sakura_grad)" stroke="#ff79c6" stroke-width="2" />
      <text x="400" y="50" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="#ff79c6">🌸 ${displayName.toUpperCase()} 🌸</text>
      <g transform="translate(50, 110)">
        <text x="80" y="30" text-anchor="middle" font-family="Arial" font-size="16" fill="#f8f8f2">Active Days</text>
        <text x="80" y="80" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="40" fill="#fff">${data.active_days}</text>
      </g>
      <g transform="translate(290, 100)">
        <rect width="220" height="110" rx="10" fill="rgba(255,121,198,0.1)" stroke="#ff79c6" stroke-dasharray="5,5"/>
        <text x="110" y="35" text-anchor="middle" font-family="Arial" font-size="16" fill="#ff79c6">Total Contributions</text>
        <text x="110" y="85" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="50" fill="#fff">${data.total_contributions}</text>
      </g>
      <g transform="translate(590, 110)">
        <text x="80" y="30" text-anchor="middle" font-family="Arial" font-size="16" fill="#f8f8f2">Streak</text>
        <text x="80" y="80" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="40" fill="#fff">${data.current_streak}</text>
      </g>
    </svg>`;

  // 5. MATRIX THEME
  const matrixTheme = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
      <rect width="800" height="250" rx="10" fill="#000000" stroke="#00ff00" stroke-width="2" />
      <text x="20" y="40" font-family="Courier New" font-size="20" fill="#00ff00">system_stats:~/github$ run stats.sh</text>
      <text x="50" y="90" font-family="Courier New" font-size="22" fill="#00ff00">> USER: ${displayName.toUpperCase()}</text>
      <text x="50" y="130" font-family="Courier New" font-size="22" fill="#00ff00">> ACTIVE_DAYS: ${data.active_days}</text>
      <text x="50" y="170" font-family="Courier New" font-size="22" fill="#00ff00">> TOTAL_CONTRIBS: ${data.total_contributions}</text>
      <text x="50" y="210" font-family="Courier New" font-size="22" fill="#00ff00">> CURRENT_STREAK: ${data.current_streak}</text>
      <text x="780" y="230" text-anchor="end" font-family="Courier New" font-size="14" fill="#00ff00" opacity="0.5">_status: operational</text>
    </svg>`;

  if (theme === 'cyberpunk') return cyberpunkTheme;
  if (theme === 'gold') return goldTheme;
  if (theme === 'sakura') return sakuraTheme;
  if (theme === 'matrix') return matrixTheme;
  return neonTheme;
}

module.exports = { generateTrophy };
