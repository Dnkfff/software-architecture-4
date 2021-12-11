export type openedType = 'opened';
export type closedType = 'closed';
export type eventLoopStatusTYPE = openedType | closedType;

export const openedStatus: openedType = 'opened';
export const closedStatus: closedType = 'closed';

export type postMethodArgumentsType = {
  command: string;
  args: Array<any> | string;
};
