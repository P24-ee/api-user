const UserDto = require('../../dtos/UserDto');

const UserDataAction = () => {
    const getUserData = (user) => {
        if (user === null) {
            return {};
        }

        return UserDto(user);
    };

    const getUserDataByApiKey = async (userRepository, apiKey) => {
        const user = await userRepository.getUserByApiKey(apiKey);

        return getUserData(user);
    };

    return {
        getUserData,
        getUserDataByApiKey,
    }
};

module.exports = UserDataAction;
