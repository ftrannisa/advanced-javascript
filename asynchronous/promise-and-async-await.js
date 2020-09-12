const request = require("request");
const options = {
  url: "https://api.github.com/repos/request/request",
  headers: {
    "User-Agent": "request",
  },
};

// CALLBACK
// function callback(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     const info = JSON.parse(body);
//     console.log(info.name);
//     console.log(info.stargazers_count + " Stars");
//     console.log(info.forks_count + " Forks");
//   }
// }
// request(options, callback);

// PROMISE
const reqGithub = () => {
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const repo = JSON.parse(body);
        resolve(repo);
      } else {
        reject("Error");
      }
    });
  });
};
console.log(reqGithub());

// ASYNC AWAIT

const fetch = require("node-fetch");
const reqAsync = async () => {
  try {
    let response = await fetch("https://api.github.com/repos/request/request");
    let json = await response.json();
    return json.stargazers_count;
  } catch (error) {
    console.error(error);
  }
};
console.log(reqAsync());
