import { useLocation } from 'wouter';

export default function Card({ infoCard }) {

    const [location, setLocation] = useLocation();

    function onCardClick(idArtist) {
        setLocation(`/artist/${idArtist}`);
    }

    return (
        <div onClick={() => onCardClick(infoCard.artists[0].id)}
            className='flex flex-col bg-white rounded-2xl md:w-64 cursor-pointer
            hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white
            hover:contrast-125'>
            {/* IMAGE OF ALBUM */}
            <img src={infoCard.images[0].url} alt={infoCard.name}
                className='object-top rounded-t-2xl w-full h-auto' />
            {/* BADGES */}
            <div className="flex space-x-2 justify-center my-3 mx-3">
                <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap 
                    align-baseline font-bold bg-fuchsia-900 text-white rounded">
                    Released: {infoCard.release_date}
                </span>
                <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap 
                    align-baseline font-bold bg-violet-900 text-white rounded">
                    {infoCard.album_type}
                </span>
            </div>
            {/* TITLE OF ALBUM */}
            <div className='text-center p-3 text-3xl font-bold font-mono content-end'>
                {infoCard.name}
            </div>
        </div>
    )
}