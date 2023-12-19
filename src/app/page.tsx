"use client"
import { useFetch } from '@/Hook/useFetch'
import CardHeros from '@/Components/CardHeros/Index'
import SearchHero from '@/Components/SearchHero/Inedx'
// import useSearch from '@/Hook/useSearch'

export default function Home() {
  const { hero, searchHero, setSearchHero, }: any = useFetch()

  return (
    <>
      <header>
        <nav className='nav_bar container'>
          <h1>Hero Combate</h1>
          <SearchHero
            searchHero={searchHero}
            setSearchHero={setSearchHero}
          />
        </nav>
      </header>
      <main className='container_heros container'>
        <section className='container_card-heros'>
          {
            hero && hero.map((hero: any) => (
              <CardHeros hero={hero} key={hero.id} />
            ))
          }
        </section>

      </main>
      <footer></footer>
    </>
  )
}
