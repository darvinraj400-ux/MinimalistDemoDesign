// SVG-based architectural drawing placeholders for project galleries
// These provide visual variety when the same hero image is used for gallery items

export function createArchitecturalSVG(variant: number, width = 800, height = 600): string {
  const svgs: Record<number, string> = {
    0: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect fill="#f5f5f5" width="${width}" height="${height}"/>
      <g stroke="#d0d0d0" stroke-width="0.5" fill="none">
        <rect x="100" y="80" width="600" height="440"/>
        <rect x="140" y="120" width="200" height="180"/>
        <rect x="380" y="120" width="280" height="180"/>
        <rect x="140" y="340" width="520" height="140"/>
        <line x1="340" y1="120" x2="340" y2="300"/>
        <line x1="140" y1="340" x2="660" y2="340"/>
        <circle cx="240" cy="210" r="30" stroke-dasharray="4,4"/>
        <line x1="100" y1="80" x2="60" y2="40" stroke-dasharray="2,2"/>
        <line x1="700" y1="80" x2="740" y2="40" stroke-dasharray="2,2"/>
        <text x="60" y="35" font-family="monospace" font-size="8" fill="#999">A</text>
        <text x="740" y="35" font-family="monospace" font-size="8" fill="#999">B</text>
        <line x1="60" y1="40" x2="740" y2="40" stroke-dasharray="2,2"/>
      </g>
      <text x="100" y="560" font-family="monospace" font-size="9" fill="#999">FLOOR PLAN — SCALE 1:100</text>
    </svg>`,
    1: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect fill="#f5f5f5" width="${width}" height="${height}"/>
      <g stroke="#d0d0d0" stroke-width="0.5" fill="none">
        <line x1="50" y1="450" x2="750" y2="450"/>
        <line x1="50" y1="450" x2="50" y2="100"/>
        <line x1="50" y1="100" x2="200" y2="100"/>
        <line x1="200" y1="100" x2="200" y2="200"/>
        <line x1="200" y1="200" x2="400" y2="200"/>
        <line x1="400" y1="200" x2="400" y2="150"/>
        <line x1="400" y1="150" x2="600" y2="150"/>
        <line x1="600" y1="150" x2="600" y2="250"/>
        <line x1="600" y1="250" x2="750" y2="250"/>
        <line x1="750" y1="250" x2="750" y2="450"/>
        <line x1="50" y1="450" x2="750" y2="450" stroke-width="1"/>
        <line x1="50" y1="200" x2="200" y2="200" stroke-dasharray="3,3"/>
        <line x1="400" y1="300" x2="600" y2="300" stroke-dasharray="3,3"/>
        <rect x="100" y="350" width="60" height="100" stroke-dasharray="2,2"/>
        <rect x="500" y="350" width="80" height="100" stroke-dasharray="2,2"/>
      </g>
      <text x="50" y="490" font-family="monospace" font-size="9" fill="#999">SECTION A-A — SCALE 1:100</text>
    </svg>`,
    2: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect fill="#f5f5f5" width="${width}" height="${height}"/>
      <g stroke="#d0d0d0" stroke-width="0.5" fill="none">
        <rect x="150" y="100" width="500" height="350"/>
        <line x1="150" y1="200" x2="650" y2="200"/>
        <line x1="150" y1="300" x2="650" y2="300"/>
        <line x1="300" y1="100" x2="300" y2="450"/>
        <line x1="450" y1="100" x2="450" y2="450"/>
        <rect x="170" y="120" width="110" height="60" stroke-dasharray="4,4"/>
        <rect x="320" y="220" width="110" height="60" stroke-dasharray="4,4"/>
        <rect x="470" y="320" width="160" height="110" stroke-dasharray="4,4"/>
        <circle cx="400" cy="275" r="40" stroke-dasharray="2,2"/>
      </g>
      <text x="150" y="490" font-family="monospace" font-size="9" fill="#999">ELEVATION — SOUTH</text>
    </svg>`,
    3: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect fill="#f5f5f5" width="${width}" height="${height}"/>
      <g stroke="#d0d0d0" stroke-width="0.5" fill="none">
        <path d="M 100 400 L 100 150 L 400 100 L 700 150 L 700 400"/>
        <line x1="100" y1="400" x2="700" y2="400" stroke-width="1"/>
        <line x1="400" y1="100" x2="400" y2="400" stroke-dasharray="3,3"/>
        <rect x="200" y="250" width="80" height="150"/>
        <rect x="520" y="250" width="80" height="150"/>
        <rect x="350" y="300" width="100" height="100"/>
        <line x1="100" y1="250" x2="700" y2="250" stroke-dasharray="2,2"/>
        <circle cx="400" cy="200" r="20" stroke-dasharray="4,4"/>
      </g>
      <text x="100" y="440" font-family="monospace" font-size="9" fill="#999">DETAIL — WALL SECTION</text>
    </svg>`,
  };

  return `data:image/svg+xml,${encodeURIComponent(svgs[variant % 4])}`;
}
