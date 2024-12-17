// import data from "./data.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  // res.send("Work in proggres");

  if (req.method === "GET") {
    const dataRes = await fetch("http://localhost:3001/api/resources");
    const data = await dataRes.json();
    return res.send(data);
  }
  if (req.method === "POST") {
    console.log(req.body);

    return res.send("Data received");
  }
}
