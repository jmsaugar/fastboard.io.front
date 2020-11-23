import { Tool, PointText, Point, Raster } from 'paper';

import { Log, throttle } from '#utils';
import { drawingsMessages, tools } from '#constants';

const throttleDelay = 5; // In milliseconds
const boundsHitType = 'bounds';
const operations = Object.freeze({
  translate : 'translate',
  resize    : 'resize',
  rotate    : 'rotate',
});
const bounds = Object.freeze({
  topLeft     : 'top-left',
  topRight    : 'top-right',
  bottomLeft  : 'bottom-left',
  bottomRight : 'bottom-right',
});

function boundsSelected(point) {
  if (!this.selectedItem) {
    return false;
  }

  // @todo better hit test against the whole project and check if the first is the selected item?
  const hit = this.selectedItem.hitTest(point, {
    fill      : false,
    bounds    : true,
    stroke    : true,
    tolerance : 5,
  });

  if (!hit || hit.type !== boundsHitType) {
    return false;
  }

  return hit.name;
}

function activate() {
  Log.debug('Services : Drawings : Tools : Selector : activate');

  this.tool.activate();
}

function onMouseDown(event) {
  Log.debug('Services : Drawings : Tools : Selector : onMouseDown', { event });

  const boundsHit = boundsSelected.call(this, event.point);

  if (boundsHit) {
    switch (boundsHit) {
      case bounds.topLeft:
        this.operation = operations.rotate;
        this.previousRotation = 0;
        break;

      case bounds.topRight:
        this.operation = operations.resize;
        this.dragPoint = bounds.topRight;
        break;

      case bounds.bottomLeft:
        this.operation = operations.resize;
        this.dragPoint = bounds.bottomLeft;
        break;

      case bounds.bottomRight:
        this.operation = operations.resize;
        this.dragPoint = bounds.bottomRight;
        break;

      default:
        break;
    }
  } else {
    const contentHits = this.dependencies.project.hitTestAll(event.point, {
      fill   : true,
      stroke : true,
    });

    if (!contentHits || !contentHits.length) {
      if (this.selectedItem) {
        this.selectedItem.selected = false;
        this.selectedItem = undefined;
        this.currentPoint = undefined;
        this.operation = undefined;
      }

      return;
    }

    const { item } = contentHits[0];

    if (!(item instanceof PointText) && !(item instanceof Raster)) {
      if (this.selectedItem) {
        this.selectedItem.selected = false;
        this.selectedItem = undefined;
        this.currentPoint = undefined;
        this.operation = undefined;
      }

      return;
    }

    this.operation = operations.translate;
    if (this.selectedItem !== item) {
      // Deselect previous item
      if (this.selectedItem) {
        this.selectedItem.selected = false;
      }

      // Select new one
      this.selectedItem = item;
      this.selectedItem.selected = true;
      this.selectedItem.selectedColor = '#ccc'; // @todo selection color from constants, and use it in text and image
      this.currentPoint = event.point;
    } else {
      this.currentPoint = event.point;
    }
  }
}

function onMouseDrag(event) {
  let delta;
  let resizeOrigin;

  let p1;
  let p2;
  let newRotationAngle;

  if (this.selectedItem) {
    switch (this.operation) {
      case operations.translate:
        this.selectedItem.translate(event.point.subtract(this.currentPoint));
        this.currentPoint = event.point;
        break;

      case operations.resize:
        switch (this.dragPoint) {
          case bounds.bottomRight:
            delta = event.point.subtract(this.selectedItem.bounds.bottomRight);
            resizeOrigin = this.selectedItem.bounds.topLeft;
            break;

          case bounds.bottomLeft:
            delta = new Point(
              this.selectedItem.bounds.bottomLeft.x - event.point.x,
              event.point.y - this.selectedItem.bounds.bottomLeft.y,
            );
            resizeOrigin = this.selectedItem.bounds.topRight;
            break;

          case bounds.topRight:
            delta = new Point(
              event.point.x - this.selectedItem.bounds.topRight.x,
              this.selectedItem.bounds.topRight.y - event.point.y,
            );
            resizeOrigin = this.selectedItem.bounds.bottomLeft;
            break;

          default:
            break;
        }

        this.selectedItem.scale(
          new Point(
            (this.selectedItem.bounds.width + delta.x) / this.selectedItem.bounds.width,
            (this.selectedItem.bounds.height + delta.y) / this.selectedItem.bounds.height,
          ),
          resizeOrigin,
        );
        break;

      case operations.rotate:
        p1 = this.selectedItem.bounds.topLeft.subtract(this.selectedItem.bounds.center);
        p2 = event.point.subtract(this.selectedItem.bounds.center);

        this.selectedItem.rotate(-1 * this.previousRotation, this.selectedItem.bounds.center);
        newRotationAngle = p1.getDirectedAngle(p2);

        this.selectedItem.rotate(newRotationAngle, this.selectedItem.bounds.center);
        this.previousRotation = newRotationAngle;
        break;

      default:
        break;
    }
  }
}

export default (dependencies) => {
  Log.info('Services : Drawings : Tools : Selector : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
      project         : dependencies?.project,
    },
    tool         : new Tool(),
    selectedItem : undefined,
    currentPoint : undefined,
    operation    : undefined,
  };

  scope.tool.on('mousedown', (event) => {
    Log.debug('Selector : onMouseDown');


    onMouseDown.call(scope, event);
    // dependencies.realtimeService.send(
    //   drawingsMessages.doMouseDown,
    //   {
    //     tool : tools.selector,
    //     ...onMouseDown.call(scope, event),
    //   },
    // ).catch(() => {}); // @todo;
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      Log.debug('Selector : onMouseDrag');

      onMouseDrag.call(scope, event);
      // dependencies.realtimeService.send(
      //   drawingsMessages.doMouseDrag,
      //   {
      //     tool : tools.selector,
      //     ...onMouseDrag.call(scope, event),
      //   },
      // ).catch(() => {}); // @todo;
    },
    throttleDelay,
  ));

  return Object.freeze({
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onMouseDrag : onMouseDrag.bind(scope),
  });
};
