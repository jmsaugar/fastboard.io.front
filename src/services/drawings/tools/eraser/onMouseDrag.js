import { point2net } from '#utils';

export default function onMouseDrag(event) {
  const point = point2net(event.point);

  this.currentPath.add(point);

  return { point };
}
