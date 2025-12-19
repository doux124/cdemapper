# CDE Mapper - Feature Overview

## 🎨 Design System

The application features a modern, dark-themed interface with:
- **Space Mono** for display text (headers, technical info)
- **Inter** for body text (readable, clean)
- **Dark theme** optimized for extended use
- **Green primary color** (#22c55e) for actions
- **Glass morphism effects** for UI elements
- **Smooth animations** and transitions

## 📐 Application Layout

```
┌─────────────────────────────────────────────────────────┐
│  CDE Mapper Header                   [Active Map Name]  │
├─────────────────────────────────────────────────────────┤
│  Storage | Mapper | Visualizer | Routes                 │
├─────────────────────────────────────────────────────────┤
│                                                           │
│                   Main Content Area                       │
│              (Changes based on active tab)                │
│                                                           │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

## 🗺️ Tab 1: Storage

### Purpose
Central hub for managing all saved maps

### Features
- **Grid view** of all saved maps
- **Quick stats**: Nodes, edges, vertical connections, total distance
- **Action buttons**:
  - Visualize: Open in Visualizer tab
  - Find Routes: Open in Pathfinding tab
  - Export: Download as JSON
  - Delete: Remove from storage
- **Import button**: Load maps from JSON files
- **Creation date** displayed for each map

### Use Cases
- Browse available maps
- Export maps for backup or sharing
- Import maps from others
- Delete old or test maps
- Quick access to visualize or navigate any map

## 📍 Tab 2: Mapper

### Purpose
Create new maps using GPS and manual recording

### Layout
```
┌─────────────────────────────────────┐
│  [Recording Banner - when active]   │
├─────────────────────────────────────┤
│                                     │
│        Interactive Map Canvas       │
│     (Pan, Zoom, Current Position)   │
│                                     │
│  [GPS Info]           [Map Controls]│
├─────────────────────────────────────┤
│  B1 | L1 | L2 | L3 | L4 | L5 | L6  │
├─────────────────────────────────────┤
│  [Altitude Change Warning]          │
├─────────────────────────────────────┤
│  Nodes: 5 | Edges: 8 | Vert: 2 ...  │
├─────────────────────────────────────┤
│ [Start GPS] [Record] [Add Node]     │
│        [Save Map]                   │
└─────────────────────────────────────┘
```

### Key Features

**GPS Integration**
- High-accuracy positioning (enableHighAccuracy: true)
- Real-time coordinate conversion (lat/lng to local x/y/z)
- Accuracy indicator
- Altitude tracking for floor detection

**Node Creation**
- Modal form with:
  - Name/room code input
  - Type selector (room, junction, stairs, lift, entrance, toilet, other)
  - Aliases for alternative names
- Current GPS position automatically captured
- Visual markers on map

**Path Recording**
- Start/stop recording mode
- Automatic point capture (min 1m apart)
- Auto-connects to nodes within 5m proximity
- Visual feedback when nodes are connected
- Recording path shown in red dashed line

**Vertical Connections**
- Stairs/lifts with same name on different floors auto-connect
- 4m vertical distance per floor
- Dashed orange lines for vertical edges

**Map Controls**
- Zoom in/out
- Reset view
- Center on current position
- Pan by dragging
- Pinch zoom on mobile

### Workflow
1. Enable GPS → Wait for accurate position
2. Navigate to first location
3. Add node with name and type
4. Start recording
5. Walk to next location (near another node)
6. Repeat for all locations
7. Stop recording (creates edges)
8. Change floor and continue mapping
9. Save map with custom name

## 🔍 Tab 3: Visualizer

### Purpose
View and explore saved maps in detail

### Layout
```
┌─────────────────────────────────────┐
│                                     │
│        Interactive Map Canvas       │
│                                     │
│  [Legend]          [Map Controls]   │
│  [Node Info]                        │
├─────────────────────────────────────┤
│  B1 | L1 | L2 | L3 | L4 | L5 | L6  │
├─────────────────────────────────────┤
│  Nodes: 15 | Edges: 22 | Vert: 4    │
├─────────────────────────────────────┤
│  Building: Main Campus              │
│  Floor Nodes: 5 | Floor Edges: 8    │
│  [Export Image]                     │
└─────────────────────────────────────┘
```

### Features

**Interactive Map**
- Color-coded nodes:
  - Green: Rooms/Other
  - Orange: Stairs/Lifts
  - Blue: Entrances
- Purple lines: Horizontal paths
- Orange dashed: Vertical connections
- Click nodes for detailed info
- Auto-centers when selecting nodes

**Floor Navigation**
- Switch between floors
- See node count per floor
- Vertical connections visible on relevant floors

**Node Information Panel**
- Name and type
- Floor location
- Exact coordinates (x, y, z)
- Number of connections

**Export**
- Download current floor as PNG image
- Filename includes building name and floor

### Use Cases
- Review completed maps
- Check connectivity
- Present maps to stakeholders
- Export floor plans as images
- Verify node placement and paths

## 🎯 Tab 4: Pathfinding (Routes)

### Purpose
Find optimal routes between any two locations

### Layout
```
┌─────────────────────────────────────┐
│  From: [Search with autocomplete]   │
│  To:   [Search with autocomplete]   │
│  [Find Routes]                      │
├─────────────────────────────────────┤
│                                     │
│        Map with Highlighted Path    │
│                                     │
├─────────────────────────────────────┤
│  ● Route 1 (Shortest)  50m  35s     │
│    1→2→3→4→5 (5 stops)             │
│    [Expanded: Step-by-step]         │
│                                     │
│  ● Route 2            52m  37s     │
│    Alternative path (+2m)           │
│                                     │
│  ● Route 3            55m  39s     │
│    Another alternative (+5m)        │
└─────────────────────────────────────┘
```

### Features

**Smart Search**
- Type-ahead autocomplete
- Search by:
  - Node name
  - Room codes
  - Aliases
- Shows node type and floor in results
- Up to 10 suggestions shown

**Pathfinding Algorithm**
- **Dijkstra's algorithm** for shortest path
- **K-shortest paths** algorithm (Yen's) for alternatives
- Finds up to 3 different routes
- Considers:
  - Horizontal path distances
  - Vertical connections (stairs/lifts)
  - Actual recorded path lengths

**Route Display**
- Color-coded routes:
  - Green: Shortest route
  - Blue: Alternative 1
  - Purple: Alternative 2
- Each route shows:
  - Total distance
  - Estimated walking time (1.4 m/s)
  - Number of stops
  - Distance difference from shortest

**Step-by-Step Directions**
- Click route to expand
- Shows each waypoint:
  - Node name
  - Type and floor
  - Numbered sequence
- Visual path highlighted on map
- Glowing markers for start/end

### Use Cases
- Navigate to unfamiliar locations
- Compare different routes
- Estimate travel time
- Find accessible routes (e.g., lift vs stairs)
- Emergency evacuation planning

## 🔄 Data Flow

```
Mapper (Create)
    ↓
[Save to localStorage]
    ↓
Storage (View/Manage)
    ↓ (Select Map)
    ├→ Visualizer (Explore)
    └→ Pathfinding (Navigate)
```

## 💾 Data Persistence

**localStorage Structure**
```javascript
{
  "cde-maps": {
    "Building A": { /* map data */ },
    "Campus Main": { /* map data */ },
    "Office Floor 3": { /* map data */ }
  }
}
```

**Map Data Format**
- Metadata: building name, creation date, origin, stats
- Nodes: Dictionary of node objects with coordinates
- Edges: Array of edge objects with path points
- Graph: Adjacency list for pathfinding

## 📊 Statistics Tracked

Per Map:
- Total nodes
- Total edges
- Vertical edges (stairs/lifts)
- Total distance covered
- Creation date
- GPS origin point

Per Floor:
- Nodes on floor
- Edges on floor
- Connected to other floors

Per Route:
- Path distance
- Estimated time
- Number of stops
- Vertical changes

## 🎭 Visual Design Elements

**Colors**
- Background: Very dark blue-gray (#030712)
- Surfaces: Dark gray with transparency (glass effect)
- Primary Actions: Green (#22c55e)
- Secondary Actions: Blue (#3b82f6)
- Warnings: Orange (#f59e0b)
- Errors/Delete: Red (#ef4444)
- Text: White/Light gray

**Typography**
- Headers: Space Mono (monospace, technical feel)
- Body: Inter (clean, readable)
- Code/Coordinates: Monospace

**Effects**
- Glass morphism on panels
- Gradient text on title
- Smooth transitions (0.2s)
- Glow effects on active elements
- Subtle shadows

## 🚀 Performance Considerations

**Canvas Rendering**
- Only renders visible elements
- Efficient coordinate transformations
- Throttled pan/zoom updates
- Off-screen culling

**Data Management**
- Maps lazy-loaded from localStorage
- Only active map in memory
- Efficient graph representation for pathfinding

**Mobile Optimization**
- Touch events for pan/zoom
- Responsive layout
- Optimized for portrait orientation
- Minimal text for small screens

## 🔐 Privacy & Security

- All data stored locally (localStorage)
- No server communication
- GPS data never transmitted
- Export/import for user control
- Clear data structure for transparency
