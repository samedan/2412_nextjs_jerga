import Footer from "@/components/Footer";

import Newsletter from "@/components/Newsletter";
import ResourceHighlight from "@/components/ResourceHighlight";
import ResourceList from "@/components/ResourceList";
import Layout from "@/components/Layout";
import { resources } from "@/api/data";

export default function Home() {
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
