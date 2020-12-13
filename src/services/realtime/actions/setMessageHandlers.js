import { Log } from '#utils';
import { boardsMessages, drawingsMessages } from '#constants';

/**
 * Set message handlers for boards and drawings.
 */
export default function setMessageHandlers() {
  Log.info('Service : Realtime : setMessageHandlers');

  const { boardsService, drawingsService } = this.dependencies;

  // Add handlers for board messages
  this.socket.on(boardsMessages.didJoin, boardsService.onDidJoin);
  this.socket.on(boardsMessages.didLeave, boardsService.onDidLeave);
  this.socket.on(boardsMessages.didSetUserName, boardsService.onDidSetUserName);
  this.socket.on(boardsMessages.didSetBoardName, boardsService.onDidSetBoardName);

  // Add handlers for drawings messages
  this.socket.on(drawingsMessages.didMouseDown, drawingsService.onMouseDown);
  this.socket.on(drawingsMessages.didMouseDrag, drawingsService.onMouseDrag);
  this.socket.on(drawingsMessages.didMouseUp, drawingsService.onMouseUp);
  this.socket.on(drawingsMessages.didKeyDown, drawingsService.onKeyDown);
  this.socket.on(drawingsMessages.didAddImage, drawingsService.onImageAdded);
  this.socket.on(drawingsMessages.didClearBoard, drawingsService.onBoardCleared);
}
