export const generateRandomPosition = (container, maxDistanceX, maxDistanceY, minDistance, padding) => {
    if(!container) {
      return { x: 0, y: 0};
    }
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
    
    const center = {
      x: containerWidth / 2,
      y: containerHeight / 2,
    };
    
      const angle = Math.random() * 2 * Math.PI; // Random angle in radians
      const distance = (Math.random() * (maxDistanceX - minDistance)) + minDistance; // Random distance within maxDistance and minDistance
  
      let x = center.x + Math.cos(angle) * distance;
      let y = center.y + Math.sin(angle) * distance;
  
      // Ensure the element doesn't go outside the bounds
      x = Math.max(padding, Math.min(containerWidth-padding, x));
      y = Math.max(padding, Math.min(containerHeight-padding, y));
    
      return { x: x - 20, y: y - 20 };
    };