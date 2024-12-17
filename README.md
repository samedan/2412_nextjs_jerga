### Layout Added

# Bulma templates

> https://bulmatemplates.github.io/bulma-templates/ > https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/blog-tailsaw.html

# Bulma Forms

> https://bulma.io/documentation/form/general/

### NextJS getStaticProps

> index.js -> export async function getStaticProps()

### Getting data from server

# Github Server

> https://github.com/samedan/2412_nextjs_jerga_server_api

### Individual resource page

> getServerSideProps({ params, query })

### getInitialProps

# Called both on Server as SPA

### getStaticPaths + getStaticProps

# getStaticPaths

> [{ params: { id: '1734443554348' } },...]

### fallback in getStaticPaths : Test pages

## If not found (built page), it will be built on folder: .next/server

> npm run build
> npm start

# [id].js

> getStaticPaths -> fallback: true,
> if (router.isFallback) {return <div>Loading Data</div>; }

### Revalidate -> updates built page after X time

> getStaticProps -> revalidate: 1 (in seconds)
