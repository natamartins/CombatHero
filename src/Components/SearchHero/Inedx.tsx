import React, { useState } from 'react'
import { SearchCode } from 'lucide-react'

const Inedx = ({ setSearchHero, searchHero }: any) => {

    return (
        <form className='nav_bar-form-search-hero'>
            <input
                type="text"
                placeholder="Digite o nome do herói"
                // value={searchHero}
                onChange={(e: any) => setSearchHero(e.target.value)}
            />
            <button><SearchCode size={20} /></button>
        </form>
    )
}

export default Inedx