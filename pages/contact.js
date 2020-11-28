import Layout from '../components/Layout';
import IconGithub from '../components/Svgs/icon-github';
import IconInstagram from '../components/Svgs/icon-instagram';
import IconLinkedIn from '../components/Svgs/icon-linkedin';
import IconMail from '../components/Svgs/icon-mail';

const Contact = (props) => {
    return (
        <Layout>
            <div className="connect-img">
                <img src="/connected.png" width="100%" />
            </div>
            <h1>Contact Me</h1>
            <h3>Let's get connected</h3>
            <div className="p-md">
                I'm always interested in meeting other people in the industry and building
                connections within the tech community.
            </div>
            <div className="section__reach">
                <h3>Ways to reach me</h3>

                <div className="icons">
                    <a
                        href="https://www.linkedin.com/in/michelekempinsky/"
                        className="icon"
                        target="_blank">
                        <IconLinkedIn
                            fill="var(--interactive-400)"
                            width="80px"
                            height="80px"
                        />
                        <div>LinkedIn</div>
                    </a>
                    <a
                        href="mailto:mkempinsky@icloud.com"
                        className="icon"
                        target="_blank">
                        <IconMail
                            fill="var(--interactive-400)"
                            width="80px"
                            height="80px"
                        />
                        <div>Email</div>
                    </a>

                    <a
                        href="https://www.instagram.com/michelewritescode/?hl=en"
                        className="icon"
                        target="_blank">
                        <IconInstagram
                            fill="var(--interactive-400)"
                            width="80px"
                            height="80px"
                        />
                        <div>Instagram</div>
                    </a>
                </div>
            </div>
            <style jsx>
                {`
                    .connect-img {
                        display: inline-block;
                        float: right;
                        width: 300px;
                        margin-left: 20px;
                        transform: rotate(-30deg);
                    }
                    .section__reach {
                    }
                    .icons {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        margin-top: 60px;
                    }
                    .icons > a {
                        text-align: center;
                        font-size: 24px;
                    }
                `}
            </style>
        </Layout>
    );
};
export default Contact;
