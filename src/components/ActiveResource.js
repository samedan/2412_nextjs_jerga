import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

const ActiveResource = () => {
  const [resource, setResource] = useState({});

  useEffect(() => {
    async function fetchActiveResource() {
      const axiosRes = await axios.get("/api/activeresource"); // goes to /pages/api/activeresource.js
      const resource = axiosRes.data;
      const timeToFinish = parseInt(resource.timeToFinish, 10);
      // compare current Time to the activationTime
      const elapsedTime = moment().diff(
        moment(resource.activationTime),
        "seconds"
      );

      const updateTimeToFinish = timeToFinish * 60 - elapsedTime; // seconds

      if (updateTimeToFinish >= 0) {
        resource.timeToFinish = updateTimeToFinish;
      }
      // alert(updateTimeToFinish);

      setResource(resource);
    }
    fetchActiveResource();
  }, []);

  return (
    <div className="active-resource">
      <h1 className="resource-name">{resource.title}</h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time">{resource.timeToFinish}</h2>
      </div>
      <Link href="/" className="button">
        Go to resource
      </Link>
    </div>
  );
};

export default ActiveResource;
