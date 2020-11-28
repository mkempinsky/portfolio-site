import {BREAKPOINT} from '../../styles/styles';
import {getProp} from '../../lib/utils';

export const HiddenOnDesktop = (props) => {
    const displayValue =
        getProp(['style', 'display'], props) || getProp(['display'], props) || 'block';
    return (
        <div style={props.style}>
            {props.children}
            <style jsx>
                {`
                    div {
                        display: ${displayValue};
                    }

                    @media screen and (min-width: ${BREAKPOINT}) {
                        div {
                            display: none;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export const HiddenOnMobile = (props) => {
    const displayValue =
        getProp(['style', 'display'], props) || getProp(['display'], props) || 'block';
    return (
        <div style={props.style}>
            {props.children}
            <style jsx>
                {`
                    div {
                        display: none;
                    }

                    @media screen and (min-width: ${BREAKPOINT}) {
                        div {
                            display: ${displayValue};
                        }
                    }
                `}
            </style>
        </div>
    );
};
