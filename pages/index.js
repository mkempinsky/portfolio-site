import Head from 'next/head';
import Layout from '../components/Layout';
import Button from '../components/Button';

export default function Home() {
    console.log('test');
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="main">
                    <div className="main__inner">
                        <h1>Hello, I'm Michele.</h1>

                        <h2>Who Am I?</h2>
                        <div className="p-md">
                            I'm a motivated young professional currently working in the
                            San Diego area. I have two pets that I absolutely adore.
                            Hobbies include beach time, game nights, and curling up on the
                            couch with a thrilling murder mystery (via books,
                            documentaries, movies - I'm intrigued by it all!). I'm
                            originally from Washington State (Go Hawks) & I love good
                            coffee and rainy days.
                            <br />
                            <br />I also really love what I do for a living and I feel
                            very blessed to be able to say that. I love to learn and
                            challenge myself to keep growing my skillset.
                        </div>
                        <h2>What I do.</h2>
                        <div className="p-md">
                            Experienced User Interface Engineer with a demonstrated
                            history of working in the hospital & health care industry.
                            Skilled in Javascript, Javascript Frameworks, Wordpress,
                            Shopify, Salesforce, and modern web development. Strong
                            engineering professional with a Vocational Degree focused in
                            Full-Stack Software Development and Web Design.{' '}
                        </div>
                        <div className="buttons">
                            <div>
                                <Button>FAQs</Button>
                            </div>
                            <div>
                                <Button className="filled">Resume</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            <style jsx>
                {`
                    .main {
                        background-image: url(/cubes.png);
                        border-left: 1px solid var(--primary-100);
                        height: 100vh;
                        padding: 60px 30px 20px 120px;
                        overflow-y: scroll;
                    }
                    .main__inner {
                        max-width: 700px;
                    }
                    .buttons {
                        margin: 30px 0;
                        display: flex;
                    }
                    .buttons > div {
                        margin-right: 15px;
                    }
                `}
            </style>
        </div>
    );
}
