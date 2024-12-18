import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

const ActiveResource = () => {
  const [resource, setResource] = useState({});
  const [seconds, setSeconds] = useState(0);

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
        setSeconds(updateTimeToFinish);
      }
      // alert(updateTimeToFinish);

      setResource(resource);
    }
    fetchActiveResource();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
    if (seconds < 0) {
      clearInterval(interval);
    }
    // unmount / clean component
    return () => clearInterval(interval);
  }, [seconds]);

  // Active Resource exists BOOLean
  const hasResource = resource && resource.id;

  return (
    <div className="active-resource">
      <h1 className="resource-name">
        {hasResource ? resource.title : "Loading active resource..."}
      </h1>
      <div className="time-wrapper">
        {/* <h2 className="elapsed-time">{resource.timeToFinish}</h2> */}
        {hasResource &&
          (seconds > 0 ? (
            <h2 className="elapsed-time">{seconds}</h2>
          ) : (
            <h2 className="elapsed-time">
              <button className="button is-success">
                Click and set as Completed
              </button>
            </h2>
          ))}
      </div>
      {hasResource ? (
        <Link href="/" className="button">
          Go to resource
        </Link>
      ) : (
        <Link href="/" className="button">
          Go to resources
        </Link>
      )}
    </div>
  );
};

export default ActiveResource;
