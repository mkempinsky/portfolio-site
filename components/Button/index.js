const Button = (props) => {
    return (
        <button className={props.className}>
            {props.children}
            <style jsx>
                {`
                    button {
                        border: 1px solid var(--interactive-300);
                        background: #fff;
                        font-size: 20px;
                        width: 200px;
                        height: 60px;
                        color: var(--interactive-300);
                    }
                    button:hover {
                        cursor: pointer;
                        border: 1px solid var(--interactive-400);
                        background: var(--interactive-400);
                        transition: all 0.4s;
                        color: #fff;
                    }
                    button.filled {
                        color: #fff;
                        background: var(--interactive-300);
                        border: 1px solid var(--interactive-300);
                    }
                    button.filled:hover {
                        color: #fff;
                        background: var(--interactive-400);
                        border: 1px solid var(--interactive-400);
                    }
                `}
            </style>
        </button>
    );
};
export default Button;
