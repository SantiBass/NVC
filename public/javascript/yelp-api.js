// // const Yelp_Api_Key = () => {
//     const yelpUrl = ' '
// }

const yelp = require('yelp-fusion');
const client = yelp.client('dg33AX7OqbRm6sz4FhU7tcnUK3HC0dABtSR1jQv_W9behEGQYwc0nEO4dVq-HKu9aq2fgOmsmq-9f3AvCNU09iON2eSi4VXuNIUWZYJUu5Fi6oire2xMTCd6-pPkYXYx');

client.search({
  term: 'Four Barrel Coffee',
  location: 'san francisco, ca',
}).then(response => {
  console.log(response.jsonBody);
}).catch(e => {
  console.log(location);
});