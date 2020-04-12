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


module.exports = UserInstaller;
