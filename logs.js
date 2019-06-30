const fs = require('fs');
const config = require('./config');

function writeLog(msg){
    if(config.log_file !== ''){
        const msgToWrite = new Date().toLocaleString() + ' - ' + msg + '\n';
        if (fs.existsSync(config.log_file)) {
            fs.appendFile(config.log_file, msgToWrite, function (err) {
                if (err) throw err;
            });
        }else{
            fs.writeFile(config.log_file, msgToWrite, function(err) {
                if(err) throw err;
            });
        }
    }
}

exports.writeLog = writeLog;