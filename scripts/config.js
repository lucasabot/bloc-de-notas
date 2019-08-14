// You could add here multiple customers and their environment variables
exports.CUSTOMERS = {
  someCustomer: {
    REACT_APP_WEB_TITLE: 'Widergy - React app bootstrap'
  }
};

// You could add here specific environment customers variables
exports.ENVIRONMENTS = {
  someCustomer: {
    local: {
      REACT_APP_API_BASE_URL: 'Your api base url',
      REACT_APP_GMAPS_API_KEY: 'Your google maps api key'
    },
    qa: {
      REACT_APP_API_BASE_URL: 'Your api base url',
      REACT_APP_GMAPS_API_KEY: 'Your google maps api key'
    },
    prod: {
      REACT_APP_API_BASE_URL: 'Your api base url',
      REACT_APP_GMAPS_API_KEY: 'Your google maps api key'
    }
  }
};
