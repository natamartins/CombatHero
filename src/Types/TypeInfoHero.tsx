export default interface TypeHero {
    hero: {
        name: string,
        slug: string,
        id: number,
        powerstats: {
            combat: number,
            durability: number,
            intelligence: number,
            power: number,
            speed: number,
            strength: number,
        },
        images: {
            lg: string,
            md: string,
            sm: string,
            xs: string,
        },
        appearance: {
            eyeColor: string,
            gender: string,
            hairColor: string,
        },
        biography: {
            aliases: [],
            alignment: string,
            alterEgos: string,
            firstAppearance: string,
            fullName: string,
            placeOfBirth: string,
            publisher: string,
        },
        connections: {
            groupAffiliation: string,
            relatives: string,
        }
    }

}