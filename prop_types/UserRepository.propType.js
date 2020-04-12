const PropTypes = require('prop-types');

UserRepositoryPropType = {
    getDb: PropTypes.func.isRequired,
    getAll: PropTypes.func.isRequired,
    addRow: PropTypes.func.isRequired,
    changeApiKey: PropTypes.func.isRequired,
    getUserByHash: PropTypes.func.isRequired,
    getUserByApiKey: PropTypes.func.isRequired,
    getUserByGoogleId: PropTypes.func.isRequired,
};

module.exports = UserRepositoryPropType;
