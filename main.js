"use strict";
exports.__esModule = true;
var main_types_1 = require("./main.types");
var palindrom = function () {
    console.log('hello');
};
var commandMatch = {
    palindrom: palindrom
};
var EventLoop = /** @class */ (function () {
    function EventLoop() {
        this.status = main_types_1.closedStatus;
    }
    EventLoop.prototype.start = function () {
        this.status = main_types_1.openedStatus;
    };
    EventLoop.prototype.awaitFinish = function () {
        this.status = main_types_1.closedStatus;
    };
    EventLoop.prototype.post = function (_a) {
        var command = _a.command, args = _a.args;
        var status = this.status;
        if (status === main_types_1.closedStatus) {
            throw new Error('Event loop is not running. Before post command use Start() method');
        }
        if (!Object.keys(commandMatch).includes(command)) {
            throw new Error("command: ".concat(command, " doesnt exist"));
        }
        console.log(args);
    };
    return EventLoop;
}());
var main = function () {
    var eventLoop = new EventLoop();
    eventLoop.start();
    eventLoop.post({ command: 'palindrom', args: [1, 2, '123'] });
    eventLoop.awaitFinish();
};
main();
