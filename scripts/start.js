const { execSync } = require('child_process');

const CONFIG = require('./config');

// Default value `someCustomer` if no args provided via CLI.
const customer = process.argv[2] || 'someCustomer';

// In this place you can define common environment variables
process.env.REACT_APP_ENV = 'local';
process.env.REACT_APP_VERSION = process.env.npm_package_version;
process.env.REACT_APP_UTILITY_NAME = customer;
process.env.SASS_PATH = `src/config/${customer}/scss/`;

// Also you can add customer specific vars
const config = CONFIG.CUSTOMERS[customer];

if (config) {
  Object.keys(config).forEach(key => (process.env[key] = config[key]));
}

// If you need download customer specific assets from amazon S3 you can sync them here
// execSync(`aws s3 sync s3://utilitygo-application-assets/${customer} src/assets/ --delete`, { stdio: [0, 1, 2] });

// Then you can start your app normally using react-scripts
execSync(`react-scripts start`, { stdio: [0, 1, 2] });
