const Promise = require('bluebird');
//var exec = require('child_process').exec;
var shared = require('./shared.js');

 module.exports =  function brain_prise() {
                // do something here
   
 
  // geting the first arduino finded on usb
  var ports = shared.getPorts();
  var port = ports[0];
  // write the code to the arduino
  port.write({"function_name":"SendRadioCode","code":"10"}%);
          
   
         gladys.modules.telegram.notify({ text: 'la prise 1 est allumee' },{ id: 1 })
   

        console.log(`la temperature de la maison est de  ${deviceType.lastValue} degres`);
	            
   });
}
//
