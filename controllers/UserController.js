const LoginAction = require("./user_actions/LoginAction");
const UserRepository = require('../repositories/UserRepository');
const UserDataAction = require('./user_actions/UserDataAction');

const UserController = (db, user) => {
    const userRepository = UserRepository(db);

    const login = async body => {
        if (body) {
            const loginAction = LoginAction(userRepository, body);

            return await loginAction.getResponse();
        }

        return null;
    };

    const logout = async () => {
        await userRepository.changeApiKey(user.hash);

        return {
            message: 'The user is successfully logged out!'
        };
    };

    const getData = async (body) => {
        const apiKey = body.apiKey || null;
        if (!apiKey) {
            return {};
        }

        const userDataAction = UserDataAction();
        return userDataAction.getUserDataByApiKey(userRepository, apiKey);
    };

    const getCurrentUserData = () => {
        const userDataAction = UserDataAction();
        return userDataAction.getUserData(user);
    };

    const handle = async requestHelper => {
        const query = requestHelper.getQueryData();
        const body = await requestHelper.getJsonData();
        const action = query.action || null;
        let response = null;

        console.log(query);
        console.log(body);
        console.log(action);
        console.log(requestHelper);

        switch (action) {
            case 'login':
                response = await login(body);
                break;
            case 'logout':
                response = await logout();
                break;
            case 'get-data':
                response = await getData(body);
                break;
            case 'get-current-user-daa':
                response = getCurrentUserData();
        }

        return response;
    };

    return {
        handle
    }
};

module.exports = UserController;
