import React from 'react'
import Head from 'next/head'
import { HomePage } from '../styles'
import FavoriteList from '../components/FavoriteList'
import { FavoriteProvider } from '../contexts/FavoriteContext'
import Items from '../components/Items'
import { ObjectID } from 'bson'

interface CountryType {
  _id: ObjectID
  name: string
}

interface HomeProps {
  list: CountryType[]
}

export default function Home(props: HomeProps) {
  return (
    <FavoriteProvider>
      <HomePage>
        <Head>
          <title>Homepage</title>
        </Head>
        {console.log('index =>', props)}

        <main>
          <h1>Teste Grupo Eureka</h1>

          <section>
            <FavoriteList title="Países">
              <Items
                favorite={false}
                button1="Favoritar"
                button2="Desfavoritar"
              />
            </FavoriteList>
            <FavoriteList title="Países Favoritos">
              <Items
                favorite={true}
                button1="Desfavoritar"
                button2="Favoritar"
              />
            </FavoriteList>
          </section>
        </main>
        <footer>
          <div>
            Icons made by{' '}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </footer>
      </HomePage>
    </FavoriteProvider>
  )
}
