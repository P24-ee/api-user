const UserDataAction = () => {
    const getUserData = (user) => {
        if (user === null) {
            return {};
        }

        return {
            firstName: user.first_name,
            lastName: user.last_name,
            apiKey: user.api_key
        }
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
