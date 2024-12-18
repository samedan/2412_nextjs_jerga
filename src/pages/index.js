import Footer from "@/components/Footer";

import Newsletter from "@/components/Newsletter";
import ResourceHighlight from "@/components/ResourceHighlight";
import ResourceList from "@/components/ResourceList";
import Layout from "@/components/Layout";

// called on EVERY visit
export async function getServerSideProps() {
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();

  console.log(
    data.map((resource) => {
      return {
        params: { id: resource.id },
      };
    })
  );

  return {
    props: {
      resources: data,
    },
  };
}

export default function Home({ resources }) {
  console.log(process.env.API_URL);
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
