import React from 'react'
import Card from './Card'

export default function ListOfCards({ data }) {
    if (!data) return <p>No data</p>
    return (
        <div className='container mx-auto'>
            <div className='flex justify-start mx-auto'>
                <p className='main__title text-4xl font-extrabold text-white tracking-wider mx-10 my-6'>
                    Releases
                </p>
            </div>
            <div className='flex flex-col gap-10 p-10 md:flex-row md:flex-wrap'>
                {
                    data.map((info) => (
                        <Card infoCard={info} key={info.id} />
                    ))
                }
            </div>
        </div>
    )
}