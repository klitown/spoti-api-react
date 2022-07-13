import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import ListOfCards from './ListOfCards';
import { getSpotifyToken, getApiData } from "../api/data";


export default function Home() {

    const [token, setToken] = React.useState(null);
    const [releases, setReleases] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    function handleToken() {
        setLoading(true); // INITIAL LOADING
        getSpotifyToken().then(res => {
            setToken(res.access_token);
            window.localStorage.setItem('access_token', res.access_token);
            getReleases(res.access_token);
        }
        )
    }

    function getReleases(access_token) {
        getApiData(access_token).then(res => {
            setReleases(res.albums.items);
            setLoading(false); // FINISH LOADING
        }
        )
    }

    React.useEffect(() => {
        if (!token) handleToken();
    }, []);

    if (loading) return <p>Loading..</p>

    return (
        <>
            {/* <Navbar /> */}
            <div>
                <ListOfCards data={releases} />
            </div>
        </>
    )

}