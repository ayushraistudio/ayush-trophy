function generateTrophy(data, theme) {
  var displayName = data.name || 'GitHub User';
  var active = data.active_days;
  var contribs = data.total_contributions;
  var streak = data.current_streak;

  // 1. NEON THEME
  var neonTheme = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">' +
      '<defs><linearGradient id="bgGradient"><stop offset="0%" style="stop-color:#0f2027"/><stop offset="100%" style="stop-color:#2c5364"/></linearGradient></defs>' +
      '<rect x="10" y="10" width="780" height="230" rx="15" fill="url(#bgGradient)"/>' +
      '<text x="400" y="50" text-anchor="middle" fill="white" style="font-family:sans-serif;font-weight:bold;font-size:22px">⚡ ' + displayName.toUpperCase() + ' STATS ⚡</text>' +
      '<g transform="translate(50, 90)"><rect width="160" height="110" rx="10" fill="rgba(0,0,0,0.3)" stroke="#00ffcc" stroke-width="2"/>' +
      '<text x="80" y="35" text-anchor="middle" fill="#00ffcc" style="font-family:sans-serif;font-size:14px">Active Days</text>' +
      '<text x="80" y="80" text-anchor="middle" fill="white" style="font-family:sans-serif;font-weight:800;font-size:40px">' + active + '</text></g>' +
      '<g transform="translate(290, 80)"><rect width="220" height="130" rx="12" fill="rgba(0,0,0,0.5)" stroke="#ff00cc" stroke-width="3"/>' +
      '<text x="110" y="40" text-anchor="middle" fill="#ff00cc" style="font-family:sans-serif;font-size:14px">Contributions</text>' +
      '<text x="110" y="90" text-anchor="middle" fill="white" style="font-family:sans-serif;font-weight:800;font-size:50px">' + contribs + '</text></g>' +
      '<g transform="translate(590, 90)"><rect width="160" height="110" rx="10" fill="rgba(0,0,0,0.3)" stroke="#ff5e00" stroke-width="2"/>' +
      '<text x="80" y="35" text-anchor="middle" fill="#ff5e00" style="font-family:sans-serif;font-size:14px">Streak</text>' +
      '<text x="80" y="80" text-anchor="middle" fill="white" style="font-family:sans-serif;font-weight:800;font-size:40px">' + streak + '</text></g></svg>';

  // 2. CYBERPUNK THEME
  var cyberpunkTheme = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">' +
      '<rect width="800" height="250" fill="#000" /><rect x="10" y="10" width="780" height="230" rx="15" fill="#050505" stroke="#00f3ff" stroke-width="3"/>' +
      '<text x="400" y="55" text-anchor="middle" font-family="monospace" font-size="24" font-weight="bold" fill="#00f3ff">{ ' + displayName.toUpperCase() + ' }</text>' +
      '<g transform="translate(50, 95)"><rect width="160" height="110" rx="5" fill="rgba(255, 0, 153, 0.1)" stroke="#ff0099" stroke-width="2"/>' +
      '<text x="80" y="35" text-anchor="middle" font-family="monospace" font-size="14" fill="#ff0099">ACTIVE_DAYS</text><text x="80" y="85" text-anchor="middle" fill="#fff" font-size="40" font-weight="bold">' + active + '</text></g>' +
      '<g transform="translate(290, 85)"><rect width="220" height="130" rx="5" fill="rgba(0, 243, 255, 0.1)" stroke="#00f3ff" stroke-width="2"/>' +
      '<text x="110" y="40" text-anchor="middle" font-family="monospace" font-size="14" fill="#00f3ff">TOTAL_CONTRIBS</text><text x="110" y="95" text-anchor="middle" fill="#fff" font-size="50" font-weight="bold">' + contribs + '</text></g>' +
      '<g transform="translate(590, 95)"><rect width="160" height="110" rx="5" fill="rgba(249, 240, 2, 0.1)" stroke="#f9f002" stroke-width="2"/>' +
      '<text x="80" y="35" text-anchor="middle" font-family="monospace" font-size="14" fill="#f9f002">CURR_STREAK</text><text x="80" y="85" text-anchor="middle" fill="#fff" font-size="40" font-weight="bold">' + streak + '</text></g></svg>';

  // 3. GOLD THEME
  var goldTheme = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">' +
      '<rect width="800" height="250" fill="#111" /><rect x="10" y="10" width="780" height="230" rx="15" fill="none" stroke="#d4af37" stroke-width="4"/>' +
      '<text x="400" y="55" text-anchor="middle" font-family="serif" font-size="28" fill="#d4af37">' + displayName + ' Showcase</text>' +
      '<g transform="translate(50, 95)"><text x="80" y="30" text-anchor="middle" fill="#d4af37">Active Days</text><text x="80" y="85" text-anchor="middle" fill="#fff" font-size="45" font-weight="bold">' + active + '</text></g>' +
      '<g transform="translate(290, 85)"><circle cx="110" cy="65" r="60" fill="none" stroke="#d4af37" stroke-width="2"/><text x="110" y="40" text-anchor="middle" fill="#d4af37">Contributions</text><text x="110" y="90" text-anchor="middle" fill="#fff" font-size="55" font-weight="bold">' + contribs + '</text></g>' +
      '<g transform="translate(590, 95)"><text x="80" y="30" text-anchor="middle" fill="#d4af37">Streak</text><text x="80" y="85" text-anchor="middle" fill="#fff" font-size="45" font-weight="bold">' + streak + '</text></g></svg>';

  // 4. SAKURA THEME
  var sakuraTheme = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">' +
      '<rect width="800" height="250" rx="15" fill="#1a0f1d" stroke="#ff79c6" stroke-width="2" />' +
      '<text x="400" y="50" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="#ff79c6">🌸 ' + displayName.toUpperCase() + ' 🌸</text>' +
      '<g transform="translate(50, 110)"><text x="80" y="30" text-anchor="middle" fill="#f8f8f2">Active Days</text><text x="80" y="80" text-anchor="middle" fill="#fff" font-size="40" font-weight="bold">' + active + '</text></g>' +
      '<g transform="translate(290, 100)"><rect width="220" height="110" rx="10" fill="rgba(255,121,198,0.1)" stroke="#ff79c6" stroke-dasharray="5,5"/>' +
      '<text x="110" y="35" text-anchor="middle" fill="#ff79c6">Contributions</text><text x="110" y="85" text-anchor="middle" fill="#fff" font-size="50" font-weight="bold">' + contribs + '</text></g>' +
      '<g transform="translate(590, 110)"><text x="80" y="30" text-anchor="middle" fill="#f8f8f2">Streak</text><text x="80" y="80" text-anchor="middle" fill="#fff" font-size="40" font-weight="bold">' + streak + '</text></g></svg>';

  // 5. MATRIX THEME
  var matrixTheme = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">' +
      '<rect width="800" height="250" rx="10" fill="#000000" stroke="#00ff00" stroke-width="2" />' +
      '<text x="20" y="40" font-family="Courier New" font-size="20" fill="#00ff00">system_stats:~/github$ run stats.sh</text>' +
      '<text x="50" y="90" font-family="Courier New" font-size="22" fill="#00ff00">> USER: ' + displayName.toUpperCase() + '</text>' +
      '<text x="50" y="130" font-family="Courier New" font-size="22" fill="#00ff00">> ACTIVE_DAYS: ' + active + '</text>' +
      '<text x="50" y="170" font-family="Courier New" font-size="22" fill="#00ff00">> TOTAL_CONTRIBS: ' + contribs + '</text>' +
      '<text x="50" y="210" font-family="Courier New" font-size="22" fill="#00ff00">> CURRENT_STREAK: ' + streak + '</text>' +
      '<text x="780" y="230" text-anchor="end" font-family="Courier New" font-size="14" fill="#00ff00" opacity="0.5">_status: operational</text></svg>';

  // 6. HACKER/CYBER NEON THEME (New Design based on Photo)
  var hackerTheme = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">' +
      '<defs>' +
        '<filter id="glow-pink" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-color="#ff0099" result="color"/><feComposite in="color" in2="blur" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
        '<filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-color="#00f3ff" result="color"/><feComposite in="color" in2="blur" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
        '<filter id="glow-yellow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feFlood flood-color="#e1ff00" result="color"/><feComposite in="color" in2="blur" operator="in" result="shadow"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
      '</defs>' +
      '<rect width="800" height="250" fill="#050505" />' +
      '<rect x="10" y="55" width="780" height="185" rx="10" fill="none" stroke="#00f3ff" stroke-width="2" filter="url(#glow-cyan)" opacity="0.5"/>' +
      '<text x="400" y="35" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="28" fill="#00f3ff" filter="url(#glow-cyan)">⚡ ' + displayName.toUpperCase() + ' ⚡</text>' +
      '<line x1="200" y1="45" x2="600" y2="45" stroke="#ff0099" stroke-width="2" stroke-dasharray="5,5" filter="url(#glow-pink)"/>' +
      // Active Days (Pink)
      '<g transform="translate(40, 90)">' +
        '<rect width="200" height="110" rx="10" fill="none" stroke="#ff0099" stroke-width="2" filter="url(#glow-pink)"/>' +
        '<text x="100" y="35" text-anchor="middle" font-family="monospace" font-size="16" fill="#ff0099">active_days</text>' +
        '<text x="100" y="80" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="40" fill="#fff">' + active + '</text>' +
      '</g>' +
      // Total Contributions (Cyan - Center)
      '<g transform="translate(280, 80)">' +
        '<rect width="240" height="130" rx="10" fill="none" stroke="#00f3ff" stroke-width="3" filter="url(#glow-cyan)"/>' +
        '<text x="120" y="35" text-anchor="middle" font-family="monospace" font-size="18" fill="#00f3ff">total_contribs</text>' +
        '<text x="120" y="90" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="50" fill="#fff">' + contribs + '</text>' +
      '</g>' +
      // Streak (Yellow)
      '<g transform="translate(560, 90)">' +
        '<rect width="200" height="110" rx="10" fill="none" stroke="#e1ff00" stroke-width="2" filter="url(#glow-yellow)"/>' +
        '<text x="100" y="35" text-anchor="middle" font-family="monospace" font-size="16" fill="#e1ff00">current_streak</text>' +
        '<text x="100" y="80" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="40" fill="#fff">' + streak + '</text>' +
      '</g>' +
    '</svg>';

  if (theme === 'cyberpunk') return cyberpunkTheme;
  if (theme === 'gold') return goldTheme;
  if (theme === 'sakura') return sakuraTheme;
  if (theme === 'matrix') return matrixTheme;
  if (theme === 'hacker') return hackerTheme;
  return neonTheme; 
}
module.exports = { generateTrophy };
