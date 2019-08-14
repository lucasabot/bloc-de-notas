const { execSync } = require('child_process');

const CONFIG = require('./config');

// Default value `someCustomer` if no args provided via CLI.
const customer = process.argv[2] || 'someCustomer';

// Default environment `local` if no args provided via CLI.
const environment = process.argv[3] || 'local';

// In this place you can define common environment variables
process.env.REACT_APP_ENV = environment;
process.env.REACT_APP_VERSION = process.env.npm_package_version;
process.env.REACT_APP_UTILITY_NAME = customer;
process.env.SASS_PATH = `src/config/${customer}/scss/`;

// Also you can add customer specific vars
const customerConfig = CONFIG.CUSTOMERS[customer];

if (customerConfig) {
  Object.keys(customerConfig).forEach(key => (process.env[key] = customerConfig[key]));
}

// Also you can add environment specific vars
const envConfig = CONFIG.ENVIRONMENTS[customer];

if (envConfig[environment]) {
  Object.keys(envConfig[environment]).forEach(key => (process.env[key] = envConfig[environment][key]));
}

// If you need download customer specific assets from amazon S3 you can sync them here
// execSync(`aws s3 sync s3://utilitygo-application-assets/${customer} src/assets/ --delete`, { stdio: [0, 1, 2] });

// Then you can start your app normally using react-scripts
execSync(`react-scripts start`, { stdio: [0, 1, 2] });
