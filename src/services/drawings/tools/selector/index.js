import { Tool } from 'paper';

import { Log, throttle } from '#utils';
import { drawingsMessages, tools } from '#constants';
import store, { setSelectorCursorOperation } from '#store';

import reset from './reset';
import activate from './activate';
import onMouseDown from './onMouseDown';
import onMouseDrag from './onMouseDrag';
import onItem2Front from './onItem2Front';
import onItem2Back from './onItem2Back';
import onRemoveItem from './onItemRemoved';
import bringItem2Front from './bringItem2Front';
import sendItem2Back from './sendItem2Back';
import removeItem from './removeItem';
import unselectItem from './unselectItem';
import operateItem from './operateItem';

const throttleDelay = 5; // In milliseconds

export default (dependencies) => {
  Log.info('Service : Drawings : Tools : Selector : create');

  const scope = Object.seal({
    dependencies : {
      realtimeService : dependencies?.realtimeService,
      projects        : {
        drawings : dependencies?.drawingsProject,
        map      : dependencies?.mapProject,
      },
    },
    tool         : new Tool(),
    selectedItem : {
      drawings : undefined, // Selected item in the drawings project
      map      : undefined, // Selected item in the map project
      handlers : undefined, // Selected item handlers
    },
    operation : {}, // Current operation data
  });

  scope.tool.on('mousedown', (event) => {
    const itemName = onMouseDown.call(scope, event);

    // If an item was selected, notify other users
    if (itemName) {
      dependencies.realtimeService.send(
        drawingsMessages.doSelectItem,
        { tool : tools.selector, itemName },
      ).catch(() => {}); // @todo
    }
  });

  scope.tool.on('mousedrag', throttle(
    (event) => {
      const operationData = onMouseDrag.call(scope, event);

      // If operating an item, notify other users
      if (operationData) {
        dependencies.realtimeService.send(
          drawingsMessages.doOperateItem,
          { tool : tools.selector, ...operationData },
        ).catch(() => {}); // @todo
      }
    },
    throttleDelay,
  ));

  scope.tool.on(
    'mouseup',
    () => store.dispatch(setSelectorCursorOperation()),
  );

  return Object.freeze({
    reset           : reset.bind(scope),
    activate        : activate.bind(scope),
    bringItem2Front : bringItem2Front.bind(scope),
    sendItem2Back   : sendItem2Back.bind(scope),
    removeItem      : removeItem.bind(scope),
    onItem2Front    : onItem2Front.bind(scope),
    onItem2Back     : onItem2Back.bind(scope),
    onItemRemoved   : onRemoveItem.bind(scope),
    unselectItem    : unselectItem.bind(scope),
    operateItem     : operateItem.bind(scope),
  });
};
