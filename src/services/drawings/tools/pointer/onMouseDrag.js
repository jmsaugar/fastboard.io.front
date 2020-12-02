import { point2net } from '#utils';

export default function onMouseDrag(event) {
  const point = point2net(event.point);
  const path = this.currentPath;
  path.add(point);

  // @todo time to constants
  setTimeout(() => path.removeSegment(0), 500);

  return { point };
}
