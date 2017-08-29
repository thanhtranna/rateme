module.exports = {
    auth: {
        user: 'add your gmail here',
        pass: 'add gmail password'
    },
    
    facebook: {
        clientID: '1870357596564738', //Facebook login app id
        clientSecret: 'e93b60e934a42fb9f888d1da8c6d9545', //Facebook login secret key
        profileFields: ['email', 'displayName'],
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        passReqToCallback: true
    }
}