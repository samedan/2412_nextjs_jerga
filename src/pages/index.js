import Footer from "@/components/Footer";

import Newsletter from "@/components/Newsletter";
import ResourceHighlight from "@/components/ResourceHighlight";
import ResourceList from "@/components/ResourceList";
import Layout from "@/components/Layout";
import { useEffect } from "react";

// called on EVERY visit
export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3001/resources");
  const data = await resData.json();

  console.log("Logged: getServerSideProps");

  return {
    props: {
      resources: data,
    },
  };
}

export default function Home({ resources }) {
  useEffect(() => {
    fetch("http://localhost:3000/api/resources");
  }, []);

  return (
    <Layout>
      <ResourceHighlight resources={resources} />
      {/* <!-- newsletter --> */}
      <Newsletter />

      {/* <!-- Articles --> */}

      <ResourceList resources={resources} />

      <Footer />
    </Layout>
  );
}
