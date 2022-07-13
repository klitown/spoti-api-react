import { useEffect, useState } from 'react';
import { getApiData } from "../api/data";

export default function Releases({ token }) {
    
    const [releases, setReleases] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getApiData(token).then(res => {
            console.log(res)
            setReleases(res.items);
            setIsLoading(false);
        });
    }, [])

    if (isLoading)
        return (
            <div> Cargando... </div>
        )
    
    if (releases)
        return (
            <>
                <h1 className="text-2xl font-bold underline">
                        <ul>
                            { releases.map( (release) => <li>{ release }</li>) }
                        </ul>
            </h1>   
            </>
        )

}