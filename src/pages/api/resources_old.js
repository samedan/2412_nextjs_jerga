import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  // res.send("Work in proggres");

  if (req.method === "GET") {
    const dataRes = await fetch("http://localhost:3001/api/resources");
    const data = await dataRes.json();
    return res.send(data);
  }
  if (req.method === "POST" || req.method === "PATCH") {
    const { id, title, description, link, timeToFinish, priority } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Form data are missing");
    }

    // decide if POST or PATCH for URI
    const url =
      req.method === "POST"
        ? "http://localhost:3001/api/resources"
        : `http://localhost:3001/api/resources` + id;

    // console.log("req is going to: ".url);
    // console.log("request method is : ".req.method);

    // axios[req.method.toLowerCase()] = axios.post OR axios.patch
    try {
      const axiosRes = await axios[req.method.toLowerCase()](url, req.body);
      return res.send(axiosRes.data); // return response from server
    } catch (error) {
      return status(422).send("Data cannot be stored");
    }
  }
}
