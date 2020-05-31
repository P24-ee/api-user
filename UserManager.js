const UserRepository = require('./repositories/UserRepository');
const UserDto = require('./dtos/UserDto');

const UserManager = (db, requestHelper) => {
    const userRepository = UserRepository(db);
    let user = null;

    const getUser = async () => {
        if (user === null) {
            await init();
        }
        return UserDto(user);
    };

    const setUser = async () => {
        const apiKey = requestHelper.getHeader('x-api-key');
        if (apiKey === null) {
            user = null;
        }

        user = await userRepository.getUserByApiKey(apiKey);
    };

    const init = async () => {
        await setUser();
    };

    return {
        init,
        getUser,
    }
};

module.exports = UserManager;
