
var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
var send = require('./lib/send.js');
//var exec = require('./lib/exec.js');


module.exports = function(sails) {
    
   
    
    return {
	    send:send,
     install: install,
		uninstall: uninstall
    };
};
