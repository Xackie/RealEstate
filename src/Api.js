// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://realty-in-us.p.rapidapi.com/properties/v2/list-for-rent',
//   params: {
//     city: 'New York City',
//     state_code: 'NY',
//     limit: '200',
//     offset: '0',
//     sort: 'relevance'
//   },
//   headers: {
//     'X-RapidAPI-Key': '143d4f8e32mshdfa797f7c5d8a54p1af0f0jsn51c2684c0569',
//     'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// ///list//
// //details//

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://realty-in-us.p.rapidapi.com/properties/v2/detail',
//   params: {property_id: 'O3599084026'},
//   headers: {
//     'X-RapidAPI-Key': '143d4f8e32mshdfa797f7c5d8a54p1af0f0jsn51c2684c0569',
//     'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// //sale//
// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale',
//   params: {city: 'New York City', state_code: 'NY', offset: '0', limit: '200'},
//   headers: {
//     'X-RapidAPI-Key': '143d4f8e32mshdfa797f7c5d8a54p1af0f0jsn51c2684c0569',
//     'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });