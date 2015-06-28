/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    defaults: {
      clientId: 'd866fbc8-a367-44a2-9d6f-8ae2ffbd2748',
      clientBaseUrl: 'http://localyith:4200',
      serverBaseUrl: 'http://localyith:6543'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      version: '@@projectVersion'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.baseURL = '/'; // Testem prefers this...
  }

  if (environment === 'production') {
    ENV.defaults.clientId = '2c48642d-6113-4fa3-949d-5a5922ed1ff1';
    ENV.defaults.clientBaseUrl = 'https://mobile.yithlibrary.com';
    ENV.defaults.serverBaseUrl = 'https://www.yithlibrary.com';
  }

  return ENV;
};
