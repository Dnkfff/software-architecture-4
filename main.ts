import { eventLoopStatusTYPE, openedStatus, closedStatus } from './main.types';

class EventLoop {
  private status: eventLoopStatusTYPE;

  start(): void {
    this.status = openedStatus;
  }

  awaitFinish(): void {
    this.status = closedStatus;
  }
}

const main = (): void => {
  const eventLoop = new EventLoop();
  eventLoop.start();

  eventLoop.awaitFinish();
};

main();
