const fs = require("fs");

try {
  // 1. Data Read Karo
  const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  
  // Name logic: Agar data.name hai to wo, nahi to default
  const displayName = data.name || "GitHub User";

  // 2. SAARI THEMES YAHAN DEFINE KARO
  const themes = {
    
    // 🟢 Theme 1: NEON 
    neon: `
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
          <text x="80" y="80" text-anchor="middle" class="stat-number fade-in">${data.current_streak} </text>
        </g>
      </svg>
    `,

    // 🟣 Theme 2: CYBERPUNK 
    cyberpunk: `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
        <defs>
          <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#2b003e;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#1a0b2e;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
          </linearGradient>
          <filter id="cyberGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
          <style>
            .cyber-title { font-family: 'Courier New', monospace; font-weight: bold; font-size: 24px; fill: #00f3ff; letter-spacing: 3px; text-transform: uppercase; text-shadow: 0 0 10px #00f3ff; }
            .cyber-label { font-family: sans-serif; font-size: 14px; fill: #ff0099; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; }
            .cyber-number { font-family: sans-serif; font-weight: 800; font-size: 40px; fill: #fff; text-shadow: 0 0 5px white; }
            .fade-in { animation: fadeIn 2s ease-in-out; }
            .pulse { animation: pulse 3s infinite alternate; }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes pulse { 0% { transform: scale(1); transform-origin: center; } 100% { transform: scale(1.05); transform-origin: center; } }
          </style>
        </defs>

        <rect x="10" y="10" width="780" height="230" rx="15" fill="url(#cyberGrad)" stroke="#00f3ff" stroke-width="3"/>

        <text x="400" y="50" text-anchor="middle" class="cyber-title">⚡ ${displayName.toUpperCase()} ⚡</text>
        <line x1="200" y1="65" x2="600" y2="65" stroke="#ff0099" stroke-width="2" stroke-dasharray="10,5"/>

        <g transform="translate(50, 90)">
          <rect x="0" y="0" width="160" height="110" rx="10" fill="rgba(255, 0, 153, 0.1)" stroke="#ff0099" stroke-width="2"/>
          <text x="80" y="35" text-anchor="middle" class="cyber-label" fill="#ff0099">Active Days</text>
          <text x="80" y="80" text-anchor="middle" class="cyber-number fade-in">${data.active_days}</text>
        </g>

        <g transform="translate(290, 80)">
          <rect class="pulse" x="0" y="0" width="220" height="130" rx="12" fill="rgba(0, 243, 255, 0.1)" stroke="#00f3ff" stroke-width="3" filter="url(#cyberGlow)"/>
          <text x="110" y="40" text-anchor="middle" class="cyber-label" fill="#00f3ff">Contributions</text>
          <text x="110" y="90" text-anchor="middle" class="cyber-number fade-in" style="font-size: 50px;">${data.total_contributions}</text>
        </g>

        <g transform="translate(590, 90)">
          <rect x="0" y="0" width="160" height="110" rx="10" fill="rgba(249, 240, 2, 0.1)" stroke="#f9f002" stroke-width="2"/>
          <text x="80" y="35" text-anchor="middle" class="cyber-label" fill="#f9f002">Current Streak</text>
          <text x="80" y="80" text-anchor="middle" class="cyber-number fade-in">${data.current_streak} </text>
        </g>
      </svg>
    `
  };

  // 3. LOOP CHALAO AUR FILES GENERATE KARO
  for (const [key, svgContent] of Object.entries(themes)) {
    const filename = `trophy_${key}.svg`; // e.g., trophy_neon.svg, trophy_cyberpunk.svg
    fs.writeFileSync(filename, svgContent);
    console.log(`✅ Generated: ${filename}`);
  }

} catch (error) {
  console.error("❌ Error generating SVG:", error);
  process.exit(1);
}
