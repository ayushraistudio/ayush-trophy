function generateTrophy(data, theme) {
  const displayName = data.name || "GitHub User";

  // 1. NEON THEME (Fixed Logic)
  const neonTheme = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#0f2027;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2c5364;stop-opacity:1" />
        </linearGradient>
        <style>
          .title { font-family: sans-serif; font-weight: bold; font-size: 22px; fill: white; text-transform: uppercase; }
          .stat-label { font-family: sans-serif; font-size: 14px; fill: #aeaeae; }
          .stat-number { font-family: sans-serif; font-weight: 800; font-size: 40px; fill: white; }
        </style>
      </defs>
      <rect x="10" y="10" width="780" height="230" rx="15" fill="url(#bgGradient)" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
      <text x="400" y="50" text-anchor="middle" class="title">⚡ ` + displayName.toUpperCase() + ` STATS ⚡</text>
      <g transform="translate(50, 90)">
        <rect width="160" height="110" rx="10" fill="rgba(0,0,0,0.3)" stroke="#00ffcc" stroke-width="2"/>
        <text x="80" y="35" text-anchor="middle" class="stat-label" fill="#00ffcc">Active Days</text>
        <text x="80" y="80" text-anchor="middle" class="stat-number">` + data.active_days + `</text>
      </g>
      <g transform="translate(290, 80)">
        <rect width="220" height="130" rx="12" fill="rgba(0,0,0,0.5)" stroke="#ff00cc" stroke-width="3"/>
        <text x="110" y="40" text-anchor="middle" class="stat-label" fill="#ff00cc">Contributions</text>
        <text x="110" y="90" text-anchor="middle" class="stat-number" style="font-size: 50px;">` + data.total_contributions + `</text>
      </g>
      <g transform="translate(590, 90)">
        <rect width="160" height="110" rx="10" fill="rgba(0,0,0,0.3)" stroke="#ff5e00" stroke-width="2"/>
        <text x="80" y="35" text-anchor="middle" class="stat-label" fill="#ff5e00">Streak</text>
        <text x="80" y="80" text-anchor="middle" class="stat-number">` + data.current_streak + `</text>
      </g>
    </svg>`;

  // 2. CYBERPUNK THEME (Fixed Logic)
  const cyberpunkTheme = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
      <rect width="800" height="250" fill="#000" />
      <rect x="10" y="10" width="780" height="230" rx="15" fill="#050505" stroke="#00f3ff" stroke-width="3"/>
      <text x="400" y="55" text-anchor="middle" font-family="monospace" font-size="24" font-weight="bold" fill="#00f3ff">{ ` + displayName.toUpperCase() + ` }</text>
      <g transform="translate(50, 95)">
        <rect width="160" height="110" rx="5" fill="rgba(255, 0, 153, 0.1)" stroke="#ff0099" stroke-width="2"/>
        <text x="80" y="85" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="40" fill="#fff">` + data.active_days + `</text>
      </g>
      <g transform="translate(290, 85)">
        <rect width="220" height="130" rx="5" fill="rgba(0, 243, 255, 0.1)" stroke="#00f3ff" stroke-width="2"/>
        <text x="110" y="95" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="50" fill="#fff">` + data.total_contributions + `</text>
      </g>
      <g transform="translate(590, 95)">
        <rect width="160" height="110" rx="5" fill="rgba(249, 240, 2, 0.1)" stroke="#f9f002" stroke-width="2"/>
        <text x="80" y="85" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="40" fill="#fff">` + data.current_streak + `</text>
      </g>
    </svg>`;

  // 3. GOLD THEME (Fixed Logic)
  const goldTheme = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
      <rect width="800" height="250" fill="#111" />
      <rect x="10" y="10" width="780" height="230" rx="15" fill="none" stroke="#d4af37" stroke-width="4"/>
      <text x="400" y="55" text-anchor="middle" font-family="serif" font-size="28" fill="#d4af37">` + displayName + ` Showcase</text>
      <g transform="translate(50, 95)">
        <text x="80" y="85" text-anchor="middle" font-family="serif" font-weight="bold" font-size="45" fill="#fff">` + data.active_days + `</text>
      </g>
      <g transform="translate(290, 85)">
        <circle cx="110" cy="65" r="60" fill="none" stroke="#d4af37" stroke-width="2"/>
        <text x="110" y="90" text-anchor="middle" font-family="serif" font-weight="bold" font-size="55" fill="#fff">` + data.total_contributions + `</text>
      </g>
      <g transform="translate(590, 95)">
        <text x="80" y="85" text-anchor="middle" font-family="serif" font-weight="bold" font-size="45" fill="#fff">` + data.current_streak + `</text>
      </g>
    </svg>`;

  // 4. SAKURA THEME
  const sakuraTheme = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
      <rect width="800" height="250" rx="15" fill="#1a0f1d" stroke="#ff79c6" stroke-width="2" />
      <text x="400" y="50" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="#ff79c6">🌸 ` + displayName.toUpperCase() + ` 🌸</text>
      <text x="130" y="190" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="40" fill="#fff">` + data.active_days + `</text>
      <text x="400" y="185" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="50" fill="#fff">` + data.total_contributions + `</text>
      <text x="670" y="190" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="40" fill="#fff">` + data.current_streak + `</text>
    </svg>`;

  // 5. MATRIX THEME
  const matrixTheme = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
      <rect width="800" height="250" rx="10" fill="#000000" stroke="#00ff00" stroke-width="2" />
      <text x="20" y="40" font-family="Courier New" font-size="20" fill="#00ff00">system_stats:~/github$ run stats.sh</text>
      <text x="50" y="90" font-family="Courier New" font-size="22" fill="#00ff00">> USER: ` + displayName.toUpperCase() + `</text>
      <text x="50" y="130" font-family="Courier New" font-size="22" fill="#00ff00">> ACTIVE_DAYS: ` + data.active_days + `</text>
      <text x="50" y="170" font-family="Courier New" font-size="22" fill="#00ff00">> TOTAL_CONTRIBS: ` + data.total_contributions + `</text>
      <text x="50" y="210" font-family="Courier New" font-size="22" fill="#00ff00">> CURRENT_STREAK: ` + data.current_streak + `</text>
    </svg>`;

  if (theme === 'cyberpunk') return cyberpunkTheme;
  if (theme === 'gold') return goldTheme;
  if (theme === 'sakura') return sakuraTheme;
  if (theme === 'matrix') return matrixTheme;
  return neonTheme;
}

module.exports = { generateTrophy };
