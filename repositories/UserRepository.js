const uuidAPIKey = require('uuid-apikey');

const UserRepository = (db) => {
  const TABLE_NAME = "users";

  const getAll = async () => {
    const sql = "SELECT * FROM" + " " + TABLE_NAME;
    return await db.query(sql);
  };

  const addRow = async (firstName, lastName, googleId, apiKey = null) => {
    const hash = uuidAPIKey.create().apiKey;
    await db.insert(TABLE_NAME, {
      hash: hash,
      first_name: firstName,
      last_name: lastName,
      google_id: googleId,
      api_key: apiKey || uuidAPIKey.create().apiKey,
    });

    return await getUserByHash(hash);
  };

  const changeApiKey = async (hash) => {
    const apiKey = uuidAPIKey.create();
    await db.update(
      TABLE_NAME,
      {
        api_key: apiKey.apiKey,
      },
      {
        hash: hash,
      }
    );
    return apiKey.apiKey;
  };

  const getUserBy = async (fieldName, value) => {
      let data = {};
      data[fieldName] = value;
      const results = await db.get(TABLE_NAME, "*", data);
      if (results && results.length > 0) {
          return results[0];
      }

      return null;
  };

  const getUserByHash = async (hash) => {
    return await getUserBy('hash', hash);
  };

  const getUserByApiKey = async (apiKey) => {
    return getUserBy('api_key', apiKey);
  };

  const getUserByGoogleId = async (googleId) => {
    return getUserBy('google_id', googleId);
  };

  const getDb = () => {
    return db;
  };

  return {
    getDb,
    getAll,
    addRow,
    changeApiKey,
    getUserByHash,
    getUserByApiKey,
    getUserByGoogleId,
  };
};

module.exports = UserRepository;
