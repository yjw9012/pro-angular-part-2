/**
 * Created by yjw9012 on 4/24/16.
 */
angular.module("customServices", []).factory("logService", function () {
    var messageCount = 0;
    return {
        log: function (msg) {
            console.log("(LOG + " + messageCount++ + ") " + msg);
        }
    };
});