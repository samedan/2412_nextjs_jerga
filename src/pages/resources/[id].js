import Layout from "@/components/Layout";

const ResourceDetail = ({ resource }) => {
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
// export async function getServerSideProps({ params, query }) {
//   const dataRes = await fetch(
//     `http://localhost:3001/api/resources/${params.id}`
//   );
//   const data = await dataRes.json();
//   return {
//     props: {
//       // resourceId: params.id, // [id].js
//       // resourceId: query.id,
//       resource: data,
//     },
//   };
// }

export async function getStaticPaths() {
  const dataRes = await fetch(`http://localhost:3001/api/resources`);
  const data = await dataRes.json();
  const paths = data.map((resource) => {
    return {
      params: { id: resource.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false, // 404 page
  };
}
export async function getStaticProps({ params, query }) {
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
