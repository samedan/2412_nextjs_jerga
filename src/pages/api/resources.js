// import data from "./data.json";

export default async function (req, res) {
  // res.send("Work in proggres");
  const dataRes = await fetch("http://localhost:3001/resources");
  const data = await dataRes.json();
  res.send(data);
}
