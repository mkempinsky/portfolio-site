import Layout from '../../components/Layout';
import Byline from '../../components/Byline';
import BreadCrumbs from '../../components/BreadCrumbs';
import {getProp} from '../../lib/utils';

const BlogPost = ({post}) => {
    const title = getProp(['title', 'rendered'], post);
    const content = getProp(['content', 'rendered'], post, '');
    const image = getProp(['_embedded', 'wp:featuredmedia', [0], 'source_url'], post, '');
    return (
        <Layout headerImage={image}>
            <BreadCrumbs />
            <div className="title-container">
                <h1 dangerouslySetInnerHTML={{__html: title}} />
            </div>
            <Byline post={post} />
            <div className="content">
                <div dangerouslySetInnerHTML={{__html: content}} />
            </div>
            <style jsx>{``}</style>
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const {slug = ''} = context.query;

    const res = await fetch(
        `https://michelewritescode.com/wp-json/wp/v2/posts?&slug=${slug}&_embed`
    );

    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post: data?.[0] || {},
        },
    };
}

export default BlogPost;
