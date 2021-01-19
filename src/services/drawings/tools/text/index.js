import { Tool } from 'paper';

import { Log } from '#utils';
import {
  drawingColorCodes, defaultDrawingColor, drawingsMessages, tools,
} from '#constants';

import activate from './activate';
import setColor from './setColor';
import onMouseDown from './onMouseDown';
import onKeyDown from './onKeyDown';

export default (dependencies) => {
  Log.info('Service : Drawings : Tools : Text : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
      projects        : {
        drawings : dependencies?.drawingsProject,
        map      : dependencies?.mapProject,
      },
    },
    tool        : new Tool(),
    strokeColor : drawingColorCodes[defaultDrawingColor],
    isWriting   : false,
    currentText : {
      drawings : undefined,
      map      : undefined,
    },
  };

  // @todo color not being the same in the other end
  scope.tool.on('mousedown', (event) => {
    Log.debug('Text : onMouseDown', { event });

    const drawingData = onMouseDown.call(scope, event);

    if (drawingData) {
      dependencies.realtimeService.send(
        drawingsMessages.doMouseDown,
        { tool : tools.text, ...drawingData },
      ).catch(() => {}); // @todo;
    }
  });

  scope.tool.on('keydown', (event) => {
    Log.debug('Text : onKeyDown', { event });

    event.preventDefault();

    const drawingData = onKeyDown.call(scope, event);

    if (drawingData) {
      dependencies.realtimeService.send(
        drawingsMessages.doKeyDown,
        { tool : tools.text, ...drawingData },
      ).catch(() => {}); // @todo;
    }
  });

  return Object.freeze({
    setColor    : setColor.bind(scope),
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onKeyDown   : onKeyDown.bind(scope),
  });
};
