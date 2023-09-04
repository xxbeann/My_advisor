const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: "jnu-team-06",
  keyFilename: "jnu-team-06-d371a4b099ff.json",
});
const bucket = storage.bucket("my_advisor_db");

module.exports = {
  storage,
  bucket,
};
