import { Tool } from 'paper';

import { Log, throttle } from '#utils';
import { drawingsMessages, tools } from '#constants';

import activate from './activate';
import setColor from './setColor';
import onMouseDown from './onMouseDown';
import onMouseDrag from './onMouseDrag';

const throttleDelay = 5; // In milliseconds

export default (dependencies) => {
  Log.info('Services : Drawings : Tools : Highlighter : create');

  const scope = {
    dependencies : {
      realtimeService : dependencies?.realtimeService,
    },
    tool        : new Tool(),
    strokeColor : 'black', // @todo
    currentPath : undefined,
  };

  scope.tool.on('mousedown', (event) => {
    Log.debug('Highlighter : onMouseDown');

    dependencies.realtimeService.send(
      drawingsMessages.doMouseDown,
      {
        tool : tools.highlighter,
        ...onMouseDown.call(scope, event),
      },
    ).catch(() => {}); // @todo;
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      Log.debug('Highlighter : onMouseDrag');

      dependencies.realtimeService.send(
        drawingsMessages.doMouseDrag,
        {
          tool : tools.highlighter,
          ...onMouseDrag.call(scope, event),
        },
      ).catch(() => {}); // @todo;
    },
    throttleDelay,
  ));

  return Object.freeze({
    setColor    : setColor.bind(scope),
    activate    : activate.bind(scope),
    onMouseDown : onMouseDown.bind(scope),
    onMouseDrag : onMouseDrag.bind(scope),
  });
};
