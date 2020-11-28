import {withRouter} from 'next/router';
import {splitPathname, filterPaths} from '../../lib/utils';
import Link from 'next/link';
import IconHome from '../../components/Svgs/icon-home';

const BreadCrumbs = (props) => {
    return null;
    const {asPath} = props.router;
    const splitPaths = splitPathname(props.router.asPath);

    if (splitPaths.length === 0 || splitPaths[0].substring(0, 1) === '?') {
        return null;
    }

    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <a title="Home">
                            <IconHome
                                width={24}
                                height={24}
                                fill="var(--interactive-400)"
                            />
                        </a>
                    </Link>
                </li>
                {splitPaths.map((link) => {
                    const linkTitle = link.replace(/-/g, ' ');
                    console.log('link', link);
                    return (
                        <li key={link} href={link}>
                            <a title={linkTitle}>{linkTitle}</a>
                        </li>
                    );
                })}
            </ul>
            <style jsx>
                {`
                    a {
                        color: var(--interactive-300);
                        text-transform: capitalize;
                    }
                    a:hover {
                        color: var(--interactive-200);
                    }

                    ul {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                    }
                    li {
                        margin-left: 20px;
                        list-style: none;
                    }
                `}
            </style>
        </div>
    );
};
export default withRouter(BreadCrumbs);
