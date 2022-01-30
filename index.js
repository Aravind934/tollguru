const axios = require("axios");

const getTolls = (params) => {
  let tolls,
    result = {};
  return new Promise((resolve, reject) => {
    axios
      .post("https://dev.tollguru.com/v1/calc/here", params, {
        headers: {
          "x-api-key": "bDft8HNMjPn27Lm8HmR4nMBpmjNnHqPn",
        },
      })
      .then((res) => {
        tolls = res.data["routes"][0]["tolls"];
        result = {
          status: 200,
          result: tolls,
        };
        resolve(result);
      })
      .catch((error) => {
        result = {
          status: 400,
          error,
        };
        reject(err);
      });
  });
};

getTolls({
  from: { lat: 9.925201, lng: 78.119774 },
  to: { lat: 10.790483, lng: 78.704674 },
  vehicleType: "2AxlesTruck",
}).then((res) => console.log(res));
