import NavDesktop from './nav-desktop';
import NavMobile from './nav-mobile';

import {HiddenOnMobile, HiddenOnDesktop} from '../Hidden';
import {BREAKPOINT} from '../../styles/styles';

const Nav = (props) => {
    return (
        <nav>
            <HiddenOnMobile>
                <NavDesktop />
            </HiddenOnMobile>
            <HiddenOnDesktop>
                <NavMobile />
            </HiddenOnDesktop>

            <style jsx>
                {`
                    nav {
                        height: 100vh;
                        max-width: 100%;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        nav {
                            max-width: 270px;
                        }
                    }
                `}
            </style>
        </nav>
    );
};
export default Nav;
