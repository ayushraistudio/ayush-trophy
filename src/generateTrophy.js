function generateTrophy(data, theme) {
  const displayName = data.name || "GitHub User";

  // Sabhi themes ke liye common stats UI
  const renderStats = (colors) => `
    <rect x="10" y="10" width="780" height="230" rx="15" fill="${colors.bg}" stroke="${colors.border}" stroke-width="2"/>
    <text x="400" y="50" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="22" fill="${colors.text}" style="text-transform: uppercase;">⚡ ${displayName} STATS ⚡</text>
    
    <g transform="translate(50, 90)">
      <rect width="160" height="110" rx="10" fill="rgba(0,0,0,0.2)" stroke="${colors.box1}" stroke-width="2"/>
      <text x="80" y="35" text-anchor="middle" font-family="sans-serif" font-size="14" fill="${colors.box1}">Active Days</text>
      <text x="80" y="85" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="40" fill="${colors.text}">${data.active_days}</text>
    </g>
    
    <g transform="translate(290, 80)">
      <rect width="220" height="130" rx="12" fill="rgba(0,0,0,0.4)" stroke="${colors.box2}" stroke-width="3"/>
      <text x="110" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" fill="${colors.box2}">Contributions</text>
      <text x="110" y="95" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="50" fill="${colors.text}">${data.total_contributions}</text>
    </g>
    
    <g transform="translate(590, 90)">
      <rect width="160" height="110" rx="10" fill="rgba(0,0,0,0.2)" stroke="${colors.box3}" stroke-width="2"/>
      <text x="80" y="35" text-anchor="middle" font-family="sans-serif" font-size="14" fill="${colors.box3}">Streak</text>
      <text x="80" y="85" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="40" fill="${colors.text}">${data.current_streak}</text>
    </g>
  `;

  const themes = {
    neon: {
      bg: "url(#neonGrad)",
      border: "rgba(255,255,255,0.1)",
      text: "#ffffff",
      box1: "#00ffcc",
      box2: "#ff00cc",
      box3: "#ff5e00"
    },
    cyberpunk: {
      bg: "#000000",
      border: "#00f3ff",
      text: "#ffffff",
      box1: "#00f3ff",
      box2: "#ff0099",
      box3: "#f9f002"
    },
    gold: {
      bg: "#1a1a1a",
      border: "#d4af37",
      text: "#d4af37",
      box1: "#d4af37",
      box2: "#ffffff",
      box3: "#d4af37"
    }
  };

  const selected = themes[theme] || themes.neon;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
      <defs>
        <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#0f2027" />
          <stop offset="100%" style="stop-color:#2c5364" />
        </linearGradient>
      </defs>
      ${renderStats(selected)}
    </svg>
  `;
}

module.exports = { generateTrophy };
