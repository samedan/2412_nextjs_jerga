import Footer from "@/components/Footer";

import Newsletter from "@/components/Newsletter";
import ResourceHighlight from "@/components/ResourceHighlight";
import ResourceList from "@/components/ResourceList";
import Layout from "@/components/Layout";
// import { resources } from "@/api/data";

export async function getStaticProps() {
  const resData = await fetch("http://localhost:3000/api/resources");
  const data = await resData.json();
  return {
    props: {
      resources: data,
    },
  };
}

export default function Home({ resources }) {
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
