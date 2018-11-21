module.exports = {
    "extends": "airbnb-base",
    "env": {
      "jest": true
    },
    "parserOptions": {
      "ecmaVersion": 8,
      "ecmaFeatures": {        
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
    "rules": {
      "comma-dangle": ["error", "never"],
      "no-console": 0,
      "arrow-parens": ["off", { "requireForBlockBody": false }]
    }
};
