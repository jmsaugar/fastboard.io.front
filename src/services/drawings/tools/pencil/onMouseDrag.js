import { point2net } from '#utils';

// @tod check return values to not be send to network if no valid action
export default function onMouseDrag(event) {
  const point = point2net(event.point);

  if (!this.currentPath.drawings) {
    return {};
  }

  this.currentPath.drawings.add(point);
  this.currentPath.map.add(point);

  return { point };
}
