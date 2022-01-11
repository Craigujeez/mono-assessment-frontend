const BASE_URL = {
    production: "http://13.52.239.106:55099/v1/",
    staging: "http://13.52.239.106:55099/v1/",
  };
  
  export const MIXPANEL_KEY = {
    staging: process.env.REACT_APP_MIXPANEL_KEY_STAGING,
    production: process.env.REACT_APP_MIXPANEL_KEY_PRODUCTION
  };
  
  export default BASE_URL;