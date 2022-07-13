export const CLIENT_ID = 'e0fe6d683c514329b5e6b1d6ef24c6d5';
export const CLIENT_REQUEST = '5da874d0a5244aadb862766d201efe31';
export const SPOTIFY_URL = `https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_REQUEST}`;
export const BASE_URL = 'https://api.spotify.com/v1';

export async function getSpotifyToken() {
    try {
        let res = await fetch(SPOTIFY_URL, {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        });
        return await res.json();
    } catch (error) {
        console.log('Error!');
        console.error(error);
    }
}

export async function getApiData(token) {
    try {
        const res = await fetch(`${BASE_URL}/browse/new-releases`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await res.json();
    } catch (error) {
        console.log('Error!');
        console.error(error)
    }
}

export async function getArtistData(token, idArtist) {
    try {
        const res = await fetch(`${BASE_URL}/artists/${idArtist}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return await res.json();
    } catch (error) {
        console.log('Error!');
        console.error(error)
    }
}
