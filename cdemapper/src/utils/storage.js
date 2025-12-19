// Storage utilities for managing maps
const STORAGE_KEY_PREFIX = 'cde_map_';
const MAPS_LIST_KEY = 'cde_maps_list';

export const storageUtils = {
  // Get list of all saved maps
  getMapsList() {
    const list = localStorage.getItem(MAPS_LIST_KEY);
    return list ? JSON.parse(list) : [];
  },

  // Save map list
  saveMapsList(list) {
    localStorage.setItem(MAPS_LIST_KEY, JSON.stringify(list));
  },

  // Save a map
  saveMap(mapName, mapData) {
    const key = STORAGE_KEY_PREFIX + mapName;
    const data = {
      ...mapData,
      name: mapName,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(key, JSON.stringify(data));

    // Update maps list
    const list = this.getMapsList();
    if (!list.find(m => m.name === mapName)) {
      list.push({ name: mapName, savedAt: data.savedAt });
      this.saveMapsList(list);
    } else {
      // Update timestamp
      const map = list.find(m => m.name === mapName);
      map.savedAt = data.savedAt;
      this.saveMapsList(list);
    }
  },

  // Load a map
  loadMap(mapName) {
    const key = STORAGE_KEY_PREFIX + mapName;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },

  // Delete a map
  deleteMap(mapName) {
    const key = STORAGE_KEY_PREFIX + mapName;
    localStorage.removeItem(key);

    // Update maps list
    const list = this.getMapsList();
    const filtered = list.filter(m => m.name !== mapName);
    this.saveMapsList(filtered);
  },

  // Get storage size in KB
  getStorageSize() {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += localStorage[key].length + key.length;
      }
    }
    return (total / 1024).toFixed(1);
  }
};
