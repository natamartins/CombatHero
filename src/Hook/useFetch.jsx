"use client"
import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = () => {
    const [hero, setHero] = useState('')
    const [searchHero, setSearchHero] = useState('');

    useEffect(() => {
        const fetchdate = async () => {
            try {
                const { data } = await axios.get('http://homologacao3.azapfy.com.br/api/ps/metahumans')
                console.log("COllor ==>", data)
                const filteredHeroes = data.filter((hero) => {
                    return hero.name.toLowerCase().includes(searchHero.toLowerCase())
                });

                setHero(filteredHeroes)
            } catch (err) {
                console.log("Error ==>", err)
            }
        }
        fetchdate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchHero])

    return { hero, searchHero, setSearchHero }
}
