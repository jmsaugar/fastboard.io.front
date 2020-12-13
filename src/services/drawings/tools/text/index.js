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
      project         : dependencies?.project,
    },
    tool        : new Tool(),
    currentText : undefined,
    strokeColor : drawingColorCodes[defaultDrawingColor],
    isWriting   : false,
  };

  scope.tool.on('mousedown', (event) => {
    Log.debug('Text : onMouseDown', { event });

    dependencies.realtimeService.send(
      drawingsMessages.doMouseDown,
      {
        tool : tools.text,
        ...onMouseDown.call(scope, event),
      },
    ).catch(() => {}); // @todo;
  });

  scope.tool.on('keydown', (event) => {
    Log.debug('Text : onKeyDown', { event });

    event.preventDefault();

    dependencies.realtimeService.send(
      drawingsMessages.doKeyDown,
      {
        tool : tools.text,
        ...onKeyDown.call(scope, event),
      },
    ).catch(() => {}); // @todo;
  });

  return Object.freeze({
    setColor    : setColor.bind(scope),
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onKeyDown   : onKeyDown.bind(scope),
  });
};
