# CDE Mapper - Indoor Navigation & Mapping

A comprehensive React-based web application for creating, visualizing, and navigating indoor maps using GPS positioning and pathfinding algorithms.

## Features

### 🗺️ Mapper Tab
- **GPS Tracking**: Real-time GPS positioning with coordinate conversion
- **Node Creation**: Add location markers (rooms, junctions, stairs, lifts, entrances, etc.)
- **Path Recording**: Walk around and automatically create edges between nodes
- **Multi-floor Support**: Map buildings with multiple floors (B1, L1-L6)
- **Vertical Connections**: Automatically connect stairs/lifts between floors
- **Real-time Visualization**: See your position and mapped areas on a zoomable canvas
- **Save Maps**: Export your maps with custom names to localStorage

### 📊 Visualizer Tab
- **Interactive Map Display**: View saved maps with pan and zoom controls
- **Floor Navigation**: Switch between floors to see different levels
- **Node Selection**: Click nodes to see detailed information
- **Legend**: Visual guide for different node types and path connections
- **Statistics**: View node count, edges, vertical connections, and total distance
- **Export Images**: Save floor maps as PNG images

### 🎯 Pathfinding Tab
- **Search Autocomplete**: Type-ahead search for starting and ending locations
- **Multiple Routes**: Find up to 3 alternative routes using Dijkstra's algorithm
- **Route Comparison**: See distance and estimated walking time for each route
- **Visual Path Display**: Routes highlighted with different colors on the map
- **Step-by-Step Directions**: Detailed breakdown of each route with waypoints
- **Floor Changes**: Handles vertical navigation through stairs and lifts

### 💾 Storage Tab
- **Map Management**: View all saved maps with statistics
- **Import/Export**: JSON-based map data for sharing and backup
- **Quick Actions**: Visualize or find routes with one click
- **Delete Maps**: Remove unwanted maps from storage

## Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first styling with custom design system
- **HTML5 Canvas**: High-performance map rendering
- **Geolocation API**: GPS positioning
- **localStorage**: Persistent map storage

## Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

## Usage Guide

### Creating a Map

1. **Go to Mapper Tab**
2. **Start GPS**: Click "Start GPS" button (requires location permission)
3. **Add Nodes**: 
   - Click "Add Node" when you're at a location you want to mark
   - Enter a name (e.g., "E1-101", "Staircase A")
   - Select type (Room, Stairs, Lift, Entrance, etc.)
   - For stairs/lifts, use the same name on different floors to auto-connect
4. **Record Paths**:
   - Click "Record Path"
   - Walk near nodes to connect them (within 5m proximity)
   - Click "Stop" when done
5. **Change Floors**: Use floor tabs to switch levels and continue mapping
6. **Save Map**: Click "Save Map" and enter a name

### Visualizing a Map

1. **Go to Storage Tab**
2. **Click "Visualize"** on any saved map
3. **Navigate**:
   - Use mouse to pan (drag) and zoom (scroll)
   - Click nodes to see details
   - Switch floors using floor tabs
   - Export images with the Export button

### Finding Routes

1. **Go to Storage Tab**
2. **Click "Find Routes"** on a saved map
3. **Enter Locations**:
   - Type in "From" field for starting location
   - Type in "To" field for destination
   - Select from autocomplete suggestions
4. **Find Routes**: Click "Find Routes" button
5. **View Results**:
   - Up to 3 alternative routes shown
   - Click a route to see it highlighted on the map
   - View step-by-step directions
   - See distance and estimated walking time

## Data Format

Maps are stored in JSON format with the following structure:

```json
{
  "metadata": {
    "building": "Building Name",
    "createdAt": "2024-01-01T00:00:00Z",
    "origin": { "lat": 0, "lng": 0, "alt": 0 },
    "stats": {
      "nodes": 10,
      "edges": 15,
      "verticalEdges": 2,
      "totalDistance": 150
    }
  },
  "nodes": {
    "N1": {
      "id": "N1",
      "name": "Room 101",
      "type": "room",
      "floor": 1,
      "x": 0, "y": 0, "z": 0,
      "lat": 0, "lng": 0
    }
  },
  "edges": [...],
  "graph": {...}
}
```

## Configuration

Key constants in `src/components/Mapper.jsx`:

- `NODE_PROXIMITY`: 5m - Distance to auto-connect nodes while recording
- `MIN_POINT_DIST`: 1m - Minimum distance between recorded points
- `FLOOR_HEIGHT`: 4m - Height between floors for vertical connections
- `Z_THRESHOLD`: 2m - Altitude change to suggest floor update
- `FLOORS`: [-1, 1, 2, 3, 4, 5, 6] - Available floor levels

## Browser Compatibility

- Modern browsers with Geolocation API support
- HTML5 Canvas support
- localStorage enabled
- Best experience on mobile devices with GPS

## Tips

1. **GPS Accuracy**: Use outdoors or near windows for better GPS accuracy
2. **Node Naming**: Use consistent naming (e.g., "Staircase A" on all floors)
3. **Path Recording**: Walk slowly and steadily for better path capture
4. **Floor Mapping**: Complete one floor before moving to the next
5. **Backup**: Export maps regularly as JSON files
6. **Multi-floor Buildings**: Use stairs/lifts to connect different levels

## License

MIT License - feel free to use and modify for your projects.
