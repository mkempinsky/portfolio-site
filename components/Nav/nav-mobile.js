import {useState} from 'react';
import IconMenu from '../Svgs/icon-menu';
import IconX from '../Svgs/icon-x';
import IconHome from '../Svgs/icon-home';

import NavOverlay from './nav-overlay';
import Link from 'next/link';

const NavMobile = (props) => {
    const [isShowing, toggleOverlay] = useState(false);

    return (
        <div className="nav-mobile">
            <div>
                <Link href="/">
                    <a title="Home">
                        <img src="/michele.jpg" alt="Michele" />
                    </a>
                </Link>
            </div>

            <div
                className="nav-mobile__menu"
                onClick={() => toggleOverlay((prevStateInput) => !prevStateInput)}>
                {isShowing ? (
                    <IconX fill="#fff" width="50px" height="50px" />
                ) : (
                    <IconMenu fill="#fff" width="50px" height="50px" />
                )}
            </div>
            <NavOverlay show={isShowing} />

            <style jsx>
                {`
                    .nav-mobile {
                        height: 60px;
                        display: flex;
                        position: relative;
                        background: var(--primary-400);
                        box-shadow: var(--box-shadow);
                    }
                    .nav-mobile__menu {
                        background: var(--interactive-300);
                        height: 60px;
                        width: 60px;
                        border-radius: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: var(--box-shadow-100);
                        right: 5px;
                        position: absolute;
                        bottom: -10px;
                        z-index: 2;
                    }

                    img {
                        width: 100px;
                        height: 100px;
                        border-radius: 100%;
                        position: absolute;
                        box-shadow: var(--box-shadow-100);
                        border: 3px solid var(--primary-200);
                        top: -10px;
                        left: -24px;
                        z-index: 2;
                    }
                `}
            </style>
        </div>
    );
};
export default NavMobile;
