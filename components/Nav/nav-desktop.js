import {useState} from 'react';

import IconMenu from '../Svgs/icon-menu';
import IconLinkedIn from '../Svgs/icon-linkedin';
import IconGithub from '../Svgs/icon-github';
import IconMail from '../Svgs/icon-mail';
import IconHome from '../Svgs/icon-home';

import Image from '../Image';
import NavOverlay from './nav-overlay';
import IconX from '../Svgs/icon-x';
import Link from 'next/link';
import IconInstagram from '../Svgs/icon-instagram';

const NavDesktop = (props) => {
    const [isShowing, toggleOverlay] = useState(false);

    return (
        <div>
            <div className="profile-img">
                <div className="circle-1" />
                <div className="circle-2" />
                <Image
                    src="/michele.jpg"
                    alt="Michele"
                    style={{
                        width: '250px',
                        height: '250px',
                        borderRadius: '100%',
                        zIndex: '10',
                        boxShadow: '0px 0px 30px rgba(000, 000, 000, .2)',
                    }}
                />
                <div
                    className="circle-3"
                    onClick={() => toggleOverlay((prevInputState) => !prevInputState)}>
                    {isShowing ? (
                        <IconX fill="#fff" width="60px" height="60px" />
                    ) : (
                        <IconMenu fill="#fff" width="60px" height="60px" />
                    )}
                </div>
                <Link href="/">
                    <a className="icon-home">
                        <IconHome fill="#fff" width="45px" height="45px" />
                    </a>
                </Link>
                <NavOverlay show={isShowing} />
            </div>
            <div className="icons">
                <a
                    href="https://www.linkedin.com/in/michelekempinsky/"
                    className="icon"
                    target="_blank">
                    <IconLinkedIn
                        fill="var(--interactive-400)"
                        width="45px"
                        height="45px"
                    />
                </a>
                <a href="mailto:mkempinsky@icloud.com" className="icon" target="_blank">
                    <IconMail fill="var(--interactive-400)" width="45px" height="45px" />
                </a>
                <a href="https://github.com/mkempinsky" className="icon" target="_blank">
                    <IconGithub
                        fill="var(--interactive-400)"
                        width="45px"
                        height="45px"
                    />
                </a>
                <a
                    href="https://www.instagram.com/michelewritescode/?hl=en"
                    className="icon"
                    target="_blank">
                    <IconInstagram
                        fill="var(--interactive-400)"
                        width="45px"
                        height="45px"
                    />
                </a>
            </div>
            <style jsx>
                {`
                    .profile-img {
                        margin-top: 50px;
                        position: relative;
                        height: 250px;
                        padding: 10px;
                    }
                    .circle-1 {
                        width: 110px;
                        height: 110px;
                        border-radius: 100%;
                        position: absolute;
                        top: 5px;
                        left: -22px;
                        z-index: 1;
                        background: var(--primary-200);
                        box-shadow: var(--box-shadow-100);
                    }

                    .circle-2 {
                        width: 150px;
                        height: 150px;
                        border-radius: 100%;
                        position: absolute;
                        top: -45px;
                        left: 20px;
                        z-index: -2;
                        background: var(--primary-400);
                    }
                    .circle-3 {
                        width: 80px;
                        height: 80px;
                        border-radius: 100%;
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        z-index: 2;
                        bottom: -12px;
                        right: -12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: var(--interactive-300);
                        box-shadow: var(--box-shadow-100);
                    }
                    .circle-3:hover {
                        cursor: pointer;
                    }
                    .icon-home {
                        background: var(--interactive-200);
                        width: 60px;
                        height: 60px;
                        display: flex;
                        margin: 0 auto;
                        border-radius: 100%;
                        align-items: center;
                        justify-content: center;
                        position: absolute;
                        bottom: -18px;
                        left: 20px;
                        box-shadow: var(--box-shadow-100);
                    }
                    .icon-home:hover {
                        box-shadow: var(--box-shadow-100);
                    }
                    .icons {
                        display: block;
                        width: 100%;
                        margin-top: 60px;
                        text-align: center;
                    }
                    .icon {
                        display: block;
                        margin-top: 15px;
                        border: 1px solid transparent;
                        position: relative;
                    }
                    .icon:hover::after {
                        content: '•';
                        color: var(--interactive-300);
                        position: absolute;
                        bottom: -10px;
                        left: 0;
                        right: 0;
                        text-align: center;
                    }
                `}
            </style>
        </div>
    );
};
export default NavDesktop;
