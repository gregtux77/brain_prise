const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function install(){


return gladys.utils.sql('select language from user where role=\'admin\' order by id')
    .then((lang) => {
		if(lang[0].language != 'fr-FR') {
         return gladys.sentence.insertBatch([sentences.Prise_1_ON]);
	 return gladys.sentence.insertBatch([sentences.Prise_1_OFF]);
        }
	 else {
        return gladys.sentence.insertBatch([sentences.Prise_1_ON]);
	return gladys.sentence.insertBatch([sentences.Prise_1_OFF]);
        }

	});



};
