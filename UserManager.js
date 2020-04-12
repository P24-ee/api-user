const PropTypes = require('prop-types');
const DbPropType = require('p24-api-db/prop_types/Db.propType');
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

if (process.env.NODE_ENV !== 'production') {
    UserManager.propTypes = {
        db: PropTypes.shape(DbPropType),
        requestHelper: PropTypes.func.isRequired
    };
}

module.exports = UserManager;
