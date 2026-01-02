const fs = require("fs");

try {
  const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

  // Modern Glassmorphism Design with Floating Animation
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="600" height="250" viewBox="0 0 600 250">
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#240b36;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#c31432;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#240b36;stop-opacity:1" />
      </linearGradient>

      <linearGradient id="gloss" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:rgba(255,255,255,0.15)" />
        <stop offset="100%" style="stop-color:rgba(255,255,255,0.05)" />
      </linearGradient>

      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
        <feOffset dx="2" dy="4" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.5"/>
        </feComponentTransfer>
        <feMerge> 
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/> 
        </feMerge>
      </filter>

      <style>
        .float { animation: float 6s ease-in-out infinite; }
        .float-delay { animation: float 6s ease-in-out 3s infinite; }
        .pulse { animation: pulse 3s infinite; }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; text-shadow: 0 0 10px white; }
          100% { opacity: 0.8; }
        }
        
        .title { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-weight: 800; font-size: 24px; fill: white; letter-spacing: 2px; text-transform: uppercase; }
        .label { font-family: 'Segoe UI', sans-serif; font-weight: 600; font-size: 14px; fill: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 1px; }
        .number { font-family: 'Segoe UI', sans-serif; font-weight: 700; font-size: 40px; fill: white; }
      </style>
    </defs>

    <rect x="5" y="5" width="590" height="240" rx="20" fill="url(#bgGradient)" stroke="rgba(255,255,255,0.2)" stroke-width="1" filter="url(#shadow)" />
    
    <circle cx="50" cy="50" r="30" fill="rgba(255,255,255,0.05)" class="float" />
    <circle cx="550" cy="200" r="40" fill="rgba(255,255,255,0.05)" class="float-delay" />
    
    <text x="50%" y="45" text-anchor="middle" class="title pulse">⚡ Ayush's GitHub Stats ⚡</text>
    <line x1="150" y1="60" x2="450" y2="60" stroke="rgba(255,255,255,0.3)" stroke-width="1" />

    <g transform="translate(40, 90)" class="float">
      <rect width="160" height="110" rx="15" fill="url(#gloss)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <text x="80" y="35" text-anchor="middle" class="label">Active Days</text>
      <text x="80" y="80" text-anchor="middle" class="number">${data.active_days}</text>
    </g>

    <g transform="translate(220, 80)" class="float-delay">
      <rect width="160" height="130" rx="15" fill="rgba(255,255,255,0.1)" stroke="#ffcc00" stroke-width="2"/>
      <text x="80" y="35" text-anchor="middle" class="label" fill="#ffcc00">Contributions</text>
      <text x="80" y="85" text-anchor="middle" class="number" style="font-size: 48px; fill: #ffcc00;">${data.total_contributions}</text>
    </g>

    <g transform="translate(400, 90)" class="float">
      <rect width="160" height="110" rx="15" fill="url(#gloss)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <text x="80" y="35" text-anchor="middle" class="label">Repositories</text>
      <text x="80" y="80" text-anchor="middle" class="number">${data.public_repos}</text>
    </g>

  </svg>`;

  fs.writeFileSync("trophy.svg", svg);
  console.log("🏆 Premium Glassmorphism Trophy Generated!");
  
} catch (error) {
  console.error("Error generating SVG:", error);
  process.exit(1);
}

