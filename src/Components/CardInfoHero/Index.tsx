import TypeHero from '@/Types/TypeInfoHero'
import Image from 'next/image'
import React from 'react'



const Index = ({ hero }: TypeHero) => {
    return (
        <div className='card_info-hero' style={{ boxShadow: `0px 0px 15px ${hero.appearance.eyeColor}` }}>
            <Image src={hero.images.lg} width={100} height={100} alt='' />
            <div className='card_info-hero-box'>
                <h2>{hero.name}</h2>
                <ul>
                    <li>intelligence: {hero.powerstats.intelligence}</li>
                    <li>strength: {hero.powerstats.strength}</li>
                    <li>speed: {hero.powerstats.speed}</li>
                    <li>durability: {hero.powerstats.durability}</li>
                    <li>power: {hero.powerstats.power}</li>
                    <li>combat: {hero.powerstats.combat}</li>
                </ul>
            </div>
        </div>
    )
}

export default Index