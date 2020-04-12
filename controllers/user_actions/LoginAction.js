const { OAuth2Client } = require('google-auth-library');
const UserDto = require('../../dtos/UserDto');

const LoginAction = (userRepository, body) => {

    const getResponse = async () => {
        const idToken = body.idToken || null;
        const accessToken = body.accessToken || null;
        if (idToken && accessToken) {
            const oAuth2Client = new OAuth2Client();
            try {
                const loginTicket = await oAuth2Client.verifyIdToken({
                    idToken: idToken
                });
                if (loginTicket) {
                    const payload = loginTicket.getPayload();
                    // const tokenInfo = await oAuth2Client.getTokenInfo(accessToken);
                    // const email = payload.email;
                    const firstName = payload.given_name;
                    const lastName = payload.family_name;
                    const googleId = payload.sub;
                    // const picture = payload.picture;
                    // const isEmailVerified = tokenInfo.email_verified;
                    // const areEmailsEqual = tokenInfo.email === email;

                    let user = await userRepository.getUserByGoogleId(googleId);
                    if (!user) {
                        user = await userRepository.addRow(firstName, lastName, googleId);
                    } else {
                        user.api_key = await userRepository.changeApiKey(user.hash);
                    }

                    if (user === null) {
                        return {};
                    }

                    return UserDto(user);
                }
            } catch (e) {
                return {
                    error: 'Please try again, something went wrong!'
                };
            }
        }

        return {
            error: 'Please try again, something went wrong!'
        };
    };

    return {
        getResponse
    }
};

module.exports = LoginAction;
