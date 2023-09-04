const { GoogleAuth } = require("google-auth-library");

let authClient;
async function getAuthClient() {
  if (!authClient) {
    const googleAuth = new GoogleAuth({
      scopes: "https://www.googleapis.com/auth/cloud-platform",
      keyFilename: "jnu-team-06-d371a4b099ff.json",
    });

    authClient = await googleAuth.getClient();
  }

  return authClient;
}

module.exports = {
  getAuthClient,
};
