import {
  eventLoopStatusTYPE,
  openedStatus,
  closedStatus,
  postMethodArgumentsType,
} from './main.types';

const palindrom = (): void => {
  console.log('hello');
};

const commandMatch = {
  palindrom: palindrom,
};

class EventLoop {
  private status: eventLoopStatusTYPE = closedStatus;

  public start(): void {
    this.status = openedStatus;
  }

  public awaitFinish(): void {
    this.status = closedStatus;
  }

  public post({ command, args }: postMethodArgumentsType): void {
    const { status } = this;

    if (status === closedStatus) {
      throw new Error('Event loop is not running. Before post command use Start() method');
    }

    if (!Object.keys(commandMatch).includes(command)) {
      throw new Error(`command: ${command} doesnt exist`);
    }
  }
}

const main = (): void => {
  const eventLoop = new EventLoop();
  eventLoop.start();

  eventLoop.post({ command: 'palindrom', args: [1, 2, '123'] });

  eventLoop.awaitFinish();
};

main();
