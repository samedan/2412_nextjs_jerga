import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const ActiveResource = () => {
  const [resource, setResource] = useState({});

  useEffect(() => {
    async function fetchActiveResource() {
      const axiosRes = await axios.get("/api/activeresource"); // goes to /pages/api/activeresource.js
      const resource = axiosRes.data;
      setResource(resource);
    }
    fetchActiveResource();
  }, []);

  return (
    <div className="active-resource">
      <h1 className="resource-name">{resource.title}</h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time">1400</h2>
      </div>
      <Link href="/" className="button">
        Go to resource
      </Link>
    </div>
  );
};

export default ActiveResource;
