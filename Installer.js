const PropTypes = require('prop-types');
const InstallerPropType = require("p24-api-install/prop_types/Installer.propType");

const UserInstaller = (installer) => {
    const install = () => {
        installer.addMigration(
            '2020032715002_create_users',
            __dirname + "/migrations/2020032715002_create_users.sql"
        );
        installer.addSeed(
            '2020032717301_seed_users',
            __dirname + "/seeds/2020032717301_seed_users.sql"
        );
    };

    return {
        install
    };
};

if (process.env.NODE_ENV !== 'production') {
    UserInstaller.propTypes = {
        installer: PropTypes.shape(InstallerPropType),
    };
}

module.exports = UserInstaller;
