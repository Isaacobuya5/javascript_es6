//a. user -> the user object as it comes from the identity provider.
//b. context -> an object containing contextual information of the current authentication transaction such as the "user's IP address or location.
//c.a function to send potentially modified tokens back to Auth0 or an error. Because of async nature of nodejs, it is important to always call the "callback" function or else the script will timeout.
function setRolesToUser(user, context, callback) {

  // Roles should only be set to verified users.
  // check if the user has an email and the email has been verified
  if (!user.email || !user.email_verified) {
    return callback(null, user, context);
  }

// this rule will store the user's role in the user.app_metadata - object that the user can't change.
  user.app_metadata = user.app_metadata || {};
  // You can add a Role based on what you want
  // In this case I check domain - check if user's email ends in a certain domain and assigns an "admin" role if they have a matching email
  // Otherwise, a user's role is assigned as a plain user
  const addRolesToUser = function (user) {
    const endsWith = '@example.com';

    if (user.email && (user.email.substring(user.email.length - endsWith.length, user.email.length) === endsWith)) {
      return ['admin'];
    }
    return ['user'];
  };

// the results of the function above is stored in const roles.
  const roles = addRolesToUser(user);

// then we assing the roles array to the adjacent roles property in user.app_metadata
  user.app_metadata.roles = roles;
  // then we call updateAppMetadata() that writes roles of the user to the app_metadata
  auth0.users.updateAppMetadata(user.user_id, user.app_metadata)
    .then(function () {
      // setting a custom claim on the idToken
      context.idToken['https://example.com/roles'] = user.app_metadata.roles;
      callback(null, user, context);
    })
    .catch(function (err) {
      callback(err);
    });
}