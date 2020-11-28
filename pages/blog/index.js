import fetch from 'isomorphic-fetch';
import Layout from '../../components/Layout';
import BlogCard from '../../components/BlogCard';
import BreadCrumbs from '../../components/BreadCrumbs';

const Blog = (props) => {
    const posts = props?.data;
    return (
        <Layout>
            <BreadCrumbs />

            <h1>Blog Posts</h1>
            <div className="container">
                {posts &&
                    Array.isArray(posts) &&
                    posts.map((post) => {
                        return <BlogCard post={post} />;
                    })}
            </div>
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch(`https://michelewritescode.com/wp-json/wp/v2/posts?&_embed`);

    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            data,
        },
    };
}

export default Blog;
