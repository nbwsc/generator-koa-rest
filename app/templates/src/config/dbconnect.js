const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const redis = require("promise-redis")();
const redisClient = redis.createClient({
  host: "127.0.0.1",
  port: "6378"
});
const dbname = "",
  ip = "",
  port = "",
  username = "",
  pwd = "";

(async () => {
  let options = {
    useMongoClient: true
  };
  await mongoose.connect(
    `mongodb://${username}:${pwd}@${ip}:${port}/${dbname}?authSource=admin`,
    options
  );
  mongoose.connection.db.on("error", function(error) {
    console.log(`i catch you ! ${error}`);
  });
  mongoose.connection.db.on("reconnect", function(ref) {
    console.log("reconnect to mongo server.");
  });
})();

console.log("db connected");

module.exports = {
  reconnect: () => {
    mongoose.connection.db.close();
    mongoose.connect(
      `mongodb://${username}:${pwd}@${ip}:${port}/${dbname}?authSource=admin`
    );
  },
  redis: redisClient
};
