import ServerInfo from "@/src/components/dashboard/ServerInfo";
import Head from "next/head";


const ServerPage = ({ server }) => {

    return (
        <>
            <Head>
                <title>{server.name}</title>
            </Head>

            <ServerInfo server={server} />
        </>
    )
}

export default ServerPage

export async function getStaticPaths() {
    const { servers } = await import('../../../data/server_status.json');
    const paths = servers.map(server => ({
        params: {
            servers: server.name
        }
    })
    )
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const server = params?.servers;
    if (!server) {
        return {
            notFound: true, // Handle missing `servers`
        };
    }
    const { servers } = await import('../../../data/server_status.json');
    const serverData = servers.find(data => data.name === server)


    return {
        props: {
            server: serverData
        }
    }
}