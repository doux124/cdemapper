# CDE Mapper - Quick Start Guide

## 🚀 Getting Started

### Installation

1. **Extract the project** to your desired location

2. **Navigate to project directory**:
   ```bash
   cd cde-mapper-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   
   This will install:
   - React 18.3.1
   - React DOM 18.3.1
   - Lucide React (icons)
   - Vite (build tool)
   - Tailwind CSS (styling)

4. **Start development server**:
   ```bash
   npm run dev
   ```
   
   The app will open at `http://localhost:3000`

### First Time Setup

1. **Grant Location Permission**: When prompted, allow the browser to access your location
2. **Create Your First Map**: Go to the Mapper tab and start GPS
3. **Add Nodes**: Click "Add Node" when at important locations
4. **Record Paths**: Enable recording and walk between nodes
5. **Save Map**: Give your map a name and save it

## 📱 Project Structure

```
cde-mapper-app/
├── src/
│   ├── components/
│   │   ├── Mapper.jsx         # GPS mapping interface
│   │   ├── Visualizer.jsx     # Map viewing interface
│   │   ├── Pathfinding.jsx    # Route finding interface
│   │   └── Storage.jsx        # Map storage management
│   ├── utils/
│   │   └── helpers.js         # Utility functions & algorithms
│   ├── hooks/
│   │   └── useGPS.js          # GPS tracking hook
│   ├── App.jsx                # Main application
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── README.md                 # Full documentation
```

## 🎯 Key Features

### Mapper Tab
- ✅ Real-time GPS tracking
- ✅ Interactive map canvas with pan/zoom
- ✅ Node creation with types (room, stairs, lift, entrance, etc.)
- ✅ Automatic path recording between nodes
- ✅ Multi-floor support (B1, L1-L6)
- ✅ Automatic vertical connections for stairs/lifts
- ✅ Save maps with custom names

### Visualizer Tab
- ✅ Beautiful 2D map visualization
- ✅ Floor-by-floor navigation
- ✅ Node information display
- ✅ Interactive controls (zoom, pan, fit)
- ✅ Export floor maps as PNG images
- ✅ Statistics overview

### Pathfinding Tab
- ✅ Smart location search with autocomplete
- ✅ Find 3 best alternative routes
- ✅ Dijkstra's algorithm for optimal paths
- ✅ Distance and time estimates
- ✅ Step-by-step directions
- ✅ Visual route highlighting

### Storage Tab
- ✅ View all saved maps
- ✅ Import/Export JSON map data
- ✅ Delete unwanted maps
- ✅ Quick access to visualize or find routes
- ✅ Map statistics at a glance

## 🛠️ Customization

### Adjusting Map Parameters

Edit `src/components/Mapper.jsx`:

```javascript
const NODE_PROXIMITY = 5;      // Distance to auto-connect (meters)
const MIN_POINT_DIST = 1;      // Min distance between points (meters)
const FLOOR_HEIGHT = 4;        // Height per floor (meters)
const Z_THRESHOLD = 2;         // Altitude change threshold (meters)
const FLOORS = [-1, 1, 2, 3, 4, 5, 6]; // Available floors
```

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'primary': {
    500: '#22c55e',  // Main green
    600: '#16a34a',  // Darker green
    // ... add more shades
  }
}
```

## 🔧 Troubleshooting

### GPS Not Working
- Ensure you're using HTTPS or localhost
- Check browser location permissions
- Try outdoors or near windows for better signal

### Maps Not Saving
- Check browser localStorage is enabled
- Verify sufficient storage space
- Try clearing browser cache if full

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3001
```

## 📦 Building for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview

# Output will be in dist/ folder
```

## 🌐 Deployment

The app can be deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag `dist` folder to Netlify
- **GitHub Pages**: Use `gh-pages` package
- **Any static host**: Upload `dist` folder contents

## 💡 Tips & Best Practices

1. **Naming Convention**: Use consistent names (e.g., "Staircase A" on all floors)
2. **GPS Accuracy**: Walk slowly, wait for good accuracy (<10m)
3. **Node Placement**: Add nodes at decision points (intersections, doors, stairs)
4. **Path Recording**: Record paths in one direction, then reverse if needed
5. **Regular Backups**: Export maps as JSON files regularly
6. **Testing**: Test routes on all floors before finalizing map

## 📄 License

MIT License - Free to use and modify

## 🆘 Support

For issues or questions:
1. Check the main README.md for detailed documentation
2. Review the code comments in source files
3. Inspect browser console for error messages
