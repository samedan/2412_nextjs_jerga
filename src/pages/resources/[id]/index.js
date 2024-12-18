import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
// import { useRouter } from "next/router";

const ResourceDetail = ({ resource }) => {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <div>Loading Data</div>;
  // }

  const activateResource = async () => {
    await axios
      .patch("/api/resources", { ...resource, status: "active" })
      .then((_) => alert("resource activated"))
      .catch((_) => alert("cannot Activate"));
  };

  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      date: {resource.createdAt}
                    </h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish: {resource.timeToFinish} minutes</p>
                    <Link
                      href={`/resources/${resource.id}/edit`}
                      className="button is-warning"
                    >
                      Update
                    </Link>
                    <button
                      className="button is-success ml-1"
                      onClick={activateResource}
                    >
                      Activate
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// export function getServerSideProps(context) {
export async function getServerSideProps({ params, query }) {
  const dataRes = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  );
  const data = await dataRes.json();
  return {
    props: {
      resource: data,
    },
  };
}

// getStaticPaths
// export async function getStaticPaths() {
//   const dataRes = await fetch(`http://localhost:3001/api/resources`);
//   const data = await dataRes.json();
//   const paths = data.map((resource) => {
//     return {
//       params: { id: resource.id.toString() },
//     };
//   });
//   return {
//     paths: paths,
//     fallback: false, // 404 page
//   };
// }
// getStaticProps
// export async function getStaticProps({ params, query }) {
//   const dataRes = await fetch(
//     `http://localhost:3001/api/resources/${params.id}`
//   );
//   const data = await dataRes.json();
//   return {
//     props: {
//       resource: data,
//     },
//     revalidate: 1,
//   };
// }

// ResourceDetail.getInitialProps = async ({ query }) => {
//   const dataRes = await fetch(
//     `http://localhost:3001/api/resources/${query.id}`
//   );
//   const data = await dataRes.json();
//   return {
//     resource: data,
//   };
// };

export default ResourceDetail;
