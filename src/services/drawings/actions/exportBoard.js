import { Log } from '#utils';

/**
 * Export the board project to SVG.
 *
 * @returns {String} String representing the project in SVG format.
 */
export default function exportBoard() {
  Log.info('Services : Drawings : exportBoard');

  return this.project.exportSVG({ asString : true });
}
