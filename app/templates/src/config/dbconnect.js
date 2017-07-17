const mongoose = require('mongoose');

const dbname = '',
    ip = '',
    port = '',
    username = '',
    pwd = '';

(async () => {

    await mongoose.connect(`mongodb://${username}:${pwd}@${ip}:${port}/${dbname}?authSource=admin`);
    mongoose.connection.db.on('error', function (error) {
        console.log(`i catch you ! ${error}`)
    });
    mongoose.connection.db.on('reconnect', function (ref) {
        console.log('reconnect to mongo server.');
    });
})();

console.log('db connected')

module.exports = {
    reconnect: () => {
        mongoose.connection.db.close();
        mongoose.connect(`mongodb://${username}:${pwd}@${ip}:${port}/${dbname}?authSource=admin`);
    }
}
// process.on('uncaughtException', function (err) {
//     console.dir(err);
//     if (err.message.match(/connection timeout/)) {
//         setTimeout(function () {
//             dbconnect.reconnect();
//         },15000)

//     }
// });
