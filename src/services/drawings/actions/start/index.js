import { Project } from 'paper';

import { Log } from '#utils';

import setupDrawingsProject from './setupDrawingsProject';
import setupMapProject from './setupMapProject';

import createViewPort from './createViewPort';
import setupTools from './setupTools';

/**
 * Start project for the specified canvas.
 *
 * @param {String} canvasId Id of the canvas html element.
 */
export default function start(drawingsId, mapId) {
  Log.info('Service : Drawings : start', { drawingsId, mapId });

  if (!this.isStarted) {
    // Create paperjs projects for both drawings and map canvases
    this.projects.drawings = new Project(drawingsId);
    this.projects.map = new Project(mapId);

    // Get drawings canvas DOM element to get its dimensions
    const canvas = document.getElementById(drawingsId);

    // Setup projects project
    setupDrawingsProject(this.projects.drawings, canvas.offsetWidth, canvas.offsetHeight);
    setupMapProject(this.projects.map);

    // Create map viewport item
    let viewPort = createViewPort(
      this.projects.map.view.center,
      canvas.offsetWidth,
      canvas.offsetHeight,
      this.projects.map,
    );

    /**
     * @todo polish this logic, not working correctly when point
     * out of the map and inside again while keeping the drag active
     */
    this.projects.map.view.onMouseDrag = (event) => {
      if (viewPort.hitTest(event.point)) {
        viewPort.translate(event.delta);

        // Avoid moving the viewport out of the canvas surface
        if (!viewPort.isInside(this.projects.map.view.bounds)) {
          viewPort.translate(event.delta.multiply(-1));
        } else {
          this.projects.drawings.view.translate(event.delta.multiply(-1));
        }
      }
    };

    /**
     * @todo polish this logic, not working correctly when viewport on the right side limit
     * and then extending window size to the right more (exceeding full canvas limit)
     */
    window.onresize = () => {
      viewPort.remove();
      viewPort = createViewPort(
        this.projects.drawings.view.center,
        canvas.offsetWidth,
        canvas.offsetHeight,
        this.projects.map,
      );
      this.projects.drawings.view.setViewSize(canvas.offsetWidth, canvas.offsetHeight);
    };

    // Setup all the tools
    this.tools = setupTools.call(this);

    this.isStarted = true;

    Log.debug('Service : Drawings : start : started');
  }
}
