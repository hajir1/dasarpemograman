import https from "https";

const endpoint = "https://eorpuda4tdqinpo.m.pipedream.net";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Yype": "application/json",
      Accept: "application/json",
    },
  },
  (res) => {
    res.addListener("data", (data) => {
      console.log(`${data.toString()}`);
    });
  }
);
const body =JSON.stringify({lastName:"UsamMuhajir"})
request.write(body)
request.end()