import Nav from '../Nav';
import {HiddenOnMobile, HiddenOnDesktop} from '../Hidden';
import {BREAKPOINT} from '../../styles/styles';

const Layout = (props) => {
    return (
        <div className="layout">
            <div className="container">
                <div className="section__left">
                    <Nav />
                </div>
                <div className="section__right">
                    <div className="main">
                        <div className="main__inner">{props.children}</div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .layout {
                    position: relative;
                }
                .featured-img {
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                    background-size: cover;
                    background-position: center center;
                    position: fixed;
                    z-index: -2;
                }
                .container {
                    display: block;
                }
                @media screen and (min-width: ${BREAKPOINT}) {
                    .container {
                        display: flex;
                        max-height: 100vh;
                        overflow: hidden;
                    }
                }
                .section__left {
                    height: 0;
                }
                @media screen and (min-width: ${BREAKPOINT}) {
                    .section__left {
                        flex: 1;
                        position: relative;
                        height: 100vh;
                        max-width: 270px;
                    }
                }

                .section__right {
                    flex: 4;
                    height: 100%;
                }
                .main {
                    background-image: url(/cubes.png);
                    border-left: 1px solid var(--primary-100);
                    height: 100vh;
                    z-index: 1;
                    padding: 30px 15px;
                    overflow-y: scroll;
                    margin-top: 60px;
                }
                @media screen and (min-width: ${BREAKPOINT}) {
                    .main {
                        padding: 60px 30px 20px 120px;
                        margin-top: 0px;
                    }
                }
                .main__inner {
                    max-width: 100%;
                }
                @media screen and (min-width: ${BREAKPOINT}) {
                    .main__inner {
                        max-width: 760px;
                    }
                }
            `}</style>
        </div>
    );
};
export default Layout;
