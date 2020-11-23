import { Tool } from 'paper';

import { Log, throttle } from '#utils';

import activate from './activate';
import onMouseDown from './onMouseDown';
import onMouseDrag from './onMouseDrag';

const throttleDelay = 5; // In milliseconds

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
