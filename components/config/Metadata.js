import Head from 'next/head';

export const Metadata = ({title}) => {
    return (
        <div>
            <Head>
                <title>{title} | ChestWeather</title>
            </Head>
        </div>
    );
}