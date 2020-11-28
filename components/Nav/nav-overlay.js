import Link from 'next/link';

const NavOverlay = ({show}) => {
    return (
        <div className={`nav-overlay ${show ? '' : 'hidden'}`}>
            <ul className={`items ${show ? '' : 'hidden'}`}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/resume">
                        <a>Resume</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact Me</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About This Site</a>
                    </Link>
                </li>
            </ul>
            <style jsx>
                {`
                    a {
                        color: #fff;
                        font-size: 32px;
                    }
                    ul {
                        list-style: none;
                        padding: 60px 60px 60px 120px;
                    }
                    li {
                        margin-bottom: 30px;
                    }
                    .nav-overlay {
                        background: rgba(58, 56, 68, 0.98);
                        position: fixed;
                        right: 0;
                        width: 100%;
                        height: 100vh;
                        top: 0;
                        left: 270px;
                        z-index: 1;
                        transition: all 0.5s;
                    }
                    .nav-overlay.hidden {
                        width: 0;
                        overflow: hidden;
                        transition: all 0.5s;
                    }
                `}
            </style>
        </div>
    );
};
export default NavOverlay;
