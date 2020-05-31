const Dto = require('p24-api-dto');

const UserDto = (user) => {
    const translations = [
        ['first_name', 'firstName'],
        ['last_name', 'lastName'],
        ['api_key', 'apiKey']
    ];
    const properties = translations.map(([sourceKey, dtoKey]) => {
        return sourceKey;
    });
    return Dto.take.only(user, properties, translations);
};

module.exports = UserDto;
