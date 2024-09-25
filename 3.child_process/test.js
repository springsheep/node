const url =
  "http://serpapi.com/search.json?engine=google&google_domain=google.com&gl=cn&hl=zh-cn&api_key=7206d26883a29454645950056df49c7b7fb7338741c7ec60729275bc452e2cfd&q=%E6%B5%B7%E5%8A%9B%E5%A3%AB%E9%AB%98%E5%B1%82&as_sitesearch=trendforce.com/news&tbs=cdr:1,cd_min:1/1/2024,cd_max:9/20/2024&start=0";
const fetch = require("node-fetch");

fetch(url)
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((error) => {
    console.error("Error fetching JSON data", error);
  });
