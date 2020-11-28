import Head from 'next/head';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Image from '../components/Image';
import Link from 'next/link';

export default function Home() {
    console.log('test');
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <h1>Hello, I'm Michele.</h1>

                <h2>Who Am I?</h2>
                <div className="cartoon">
                    <img src="/girl-2.png" width="100%" />
                </div>
                <div className="p-md">
                    I'm a motivated young professional currently working in the San Diego
                    area. I have two pets that I absolutely adore. You can usually catch
                    me enjoying beach time, game nights, and curling up on the couch with
                    a thrilling murder mystery (via books, documentaries, movies - I'm
                    intrigued by it all!). I'm originally from Washington State (Go
                    Hawks), so I love good coffee and rainy days.
                    <br />
                    <br />I also really love what I do for a living and I feel very
                    blessed to be able to say that. I love to learn and challenge myself
                    to keep growing my skillset.
                </div>
                <h2>What I do.</h2>
                <div className="cartoon">
                    <img src="/desk-2.png" width="100%" />
                </div>
                <div className="p-md">
                    I write code and create websites!
                    <br />
                    <br />I am an experienced user interface engineer with a demonstrated
                    history of working in the hospital & health care industry. I'm skilled
                    in Javascript, Javascript Frameworks, Wordpress, Shopify, Salesforce,
                    and modern web development. I consider myself a strong engineering
                    professional with a Vocational Degree focused in Full-Stack Software
                    Development and Web Design. <br />
                    <br />
                    <Link href="/blog/how-i-got-into-coding">
                        <a>Read My Full Story</a>
                    </Link>
                </div>
                <h2>More About Me.</h2>
                <div className="p-md">
                    Connect with me and learn more about my skills and experience.
                </div>
                <div className="buttons">
                    <Link href="/contact">
                        <a title="Contact Me">
                            <Button>Contact Me</Button>
                        </a>
                    </Link>
                    <div>
                        <Button className="filled">Resume</Button>
                    </div>
                </div>
            </Layout>
            <style jsx>
                {`
                    .buttons {
                        margin: 60px 0;
                        display: flex;
                    }
                    .buttons > a {
                        margin-right: 15px;
                    }
                    .cartoon {
                        display: inline-block;
                        width: 250px;
                        float: right;
                        margin-left: 15px;
                        margin-top: -50px;
                    }
                `}
            </style>
        </div>
    );
}
