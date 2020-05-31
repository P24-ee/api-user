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
        installer.addMigration(
            '2020051716151_seed_pages.sql',
            __dirname + "/migrations/2020051716151_seed_pages.sql"
        );
    };

    return {
        install
    };
};


module.exports = UserInstaller;
