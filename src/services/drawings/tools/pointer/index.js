import { Tool } from 'paper';

import { Log, throttle } from '#utils';

import { drawingsMessages, tools } from '#constants';

import activate from './activate';
import onMouseDown from './onMouseDown';
import onMouseDrag from './onMouseDrag';

const throttleDelay = 5; // In milliseconds

export default (dependencies) => {
  Log.info('Services : Drawings : Tools : Pointer : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
    },
    tool        : new Tool(),
    currentPath : undefined,
    interval    : undefined,
  };

  scope.tool.on('mousedown', (event) => {
    Log.debug('Pointer : onMouseDown');

    dependencies.realtimeService.send(
      drawingsMessages.doMouseDown,
      {
        tool : tools.pointer,
        ...onMouseDown.call(scope, event),
      },
    ).catch(() => {}); // @todo;
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      Log.debug('Pointer : onMouseDrag'); // @todo remove logs on all mouse drag events

      dependencies.realtimeService.send(
        drawingsMessages.doMouseDrag,
        {
          tool : tools.pointer,
          ...onMouseDrag.call(scope, event),
        },
      ).catch(() => {}); // @todo;
    },
    throttleDelay,
  ));

  return Object.freeze({
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onMouseDrag : onMouseDrag.bind(scope),
  });
};
