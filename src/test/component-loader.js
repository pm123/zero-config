// component-loader.js
const querystring = require('querystring');
const query = querystring.parse(__resourceQuery.slice(1)); // 去掉?
console.log(query); // {component: demo}
