import {getProp} from '../../lib/utils';
import {format, parse} from 'date-fns';

import Link from 'next/link';

const BlogCard = ({post}) => {
    const title = getProp(['title', 'rendered'], post, '');
    const excerpt = getProp(['excerpt', 'rendered'], post, '');
    const slug = getProp(['slug'], post, '');
    const image = getProp(['_embedded', 'wp:featuredmedia', [0], 'source_url'], post, '');

    let date = getProp(['date'], post, '');
    const lastUpdatedFormatted = format(parse(date), 'MMMM d, YYYY');
    return (
        <Link href={`/blog/${slug}`}>
            <a>
                <div className="blog-card">
                    <div className="blog-card__inner">
                        <div className="p-lg" dangerouslySetInnerHTML={{__html: title}} />
                        <div
                            className="p-sm excerpt"
                            dangerouslySetInnerHTML={{__html: excerpt}}
                        />
                    </div>
                    <div className="image" />
                    <style jsx>
                        {`
                            .blog-card {
                                border: 1px solid var(--primary-200);
                                margin-bottom: 30px;
                                height: 200px;
                                display: flex;
                            }
                            .blog-card:hover {
                                background: #fff;
                                transform: scale(1.03);
                                border: 1px solid var(--interactive-200);
                                transition: all 0.25s;
                            }
                            .blog-card > div {
                                width: 100%;
                            }
                            .blog-card__inner {
                                padding: 15px;
                                line-clamp: ;
                            }
                            .p-lg {
                                color: var(--interactive-300);
                            }
                            .excerpt {
                                overflow: hidden;
                                display: -webkit-box;
                                line-clamp: 3;
                                -webkit-line-clamp: 3;
                                -webkit-box-orient: vertical;
                                color: var(--primary-500);
                            }

                            .image {
                                height: 200px;
                                background-image: url(${image});
                                background-size: cover;
                                background-position: center right;
                                clip-path: polygon(27% 0, 100% 0%, 100% 198px, 0% 100%);
                            }
                        `}
                    </style>
                </div>
            </a>
        </Link>
    );
};
export default BlogCard;
