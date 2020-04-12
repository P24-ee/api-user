const UserRepository = require('./repositories/UserRepository');

const UserManager = async (db, requestHelper) => {
    const userRepository = UserRepository(db);
    let user = null;

    const getUser = () => {
        return user;
    };

    const setUser = async () => {
        const apiKey = requestHelper.getHeader('x-api-key');
        if (apiKey === null) {
            user = null;
        }

        user = await userRepository.getUserByApiKey(apiKey);
    };

    await setUser();

    return {
        getUser,
    }
};

module.exports = UserManager;
