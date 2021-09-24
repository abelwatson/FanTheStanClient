let apiURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        apiURL = 'http://localhost:3000';
        break;
    // this is the deployed react application
    // default 'adventurewaits.herokuapp.com':
    //     apiURL = 'https://aw-bh-jz-dndcreator.herokuapp.com'
}

export default apiURL;