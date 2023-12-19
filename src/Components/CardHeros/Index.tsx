import Image from 'next/image'
import React from 'react'
import CardInfoHero from '@/Components/CardInfoHero/Index'
import TypeHero from '@/Types/TypeInfoHero'

const Index = ({ hero }: TypeHero) => {
    // console.log("Hero here ==>", hero)

    return (
        <div className='card_hero' >
            <Image
                style={{ boxShadow: `0px 0px 15px ${hero.appearance.eyeColor}` }}
                src={hero.images.lg}
                alt={hero.name}
                width={100}
                height={100}
            />
            <p className='card_hero-name' style={{ boxShadow: `0px 0px 10px ${hero.appearance.eyeColor}` }}>{hero.name}</p>
            <CardInfoHero hero={hero} />
        </div>
    )
}

export default Index