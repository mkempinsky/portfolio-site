import Nav from '../Nav';

const Layout = (props) => {
    return (
        <div>
            <div className="container">
                <div className="section__left">
                    <Nav />
                    <footer>Copyright © 2020</footer>
                </div>
                <div className="section__right">{props.children}</div>
            </div>

            <style jsx>{`
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
