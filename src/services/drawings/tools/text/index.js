import { Tool } from 'paper';

import { Log, noop } from '#utils';
import {
  drawingColorCodes, defaultDrawingColor, tools,
} from '#constants';

import activate from './activate';
import setColor from './setColor';
import onMouseDown from './onMouseDown';
import onTextCreated from './onTextCreated';
import onTextUpdated from './onTextUpdated';
import onTextUnselected from './onTextUnselected';
import unselectText from './unselectText';
import updateText from './updateText';

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
      itemName : undefined,
      drawings : undefined,
      map      : undefined,
    },
  };

  scope.tool.on('mousedown', (event) => {
    Log.debug('Text : onMouseDown', { event });

    const drawingData = onMouseDown.call(scope, event);

    if (drawingData) {
      const { type : messageType, ...data } = drawingData;

      dependencies.realtimeService.send(
        messageType,
        { tool : tools.text, ...data },
      ).catch(noop); // @todo decide what to do with those cases
    }
  });

  return Object.freeze({
    setColor         : setColor.bind(scope),
    activate         : activate.bind(scope),
    onTextCreated    : onTextCreated.bind(scope),
    onTextUpdated    : onTextUpdated.bind(scope),
    onTextUnselected : onTextUnselected.bind(scope),
    unselectText     : unselectText.bind(scope),
    updateText       : updateText.bind(scope),
  });
};
