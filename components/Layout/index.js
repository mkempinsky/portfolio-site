import Nav from '../Nav';

const Layout = (props) => {
    return (
        <div className="layout">
            <div className="container">
                <div className="section__left">
                    <Nav />
                    <footer>Copyright © 2020</footer>
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
                    display: flex;
                    max-height: 100vh;
                    overflow: hidden;
                }
                .section__left {
                    flex: 1;
                    position: relative;
                    height: 100vh;
                    max-width: 270px;
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
                    padding: 60px 30px 20px 120px;
                    overflow-y: scroll;
                }
                .main__inner {
                    max-width: 760px;
                }
                footer {
                    position: absolute;
                    bottom: 0;
                    padding: 15px 0;
                    max-width: 270px;
                    background: var(--secondary-100);
                    width: 100%;
                    font-size: 12px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};
export default Layout;
