import { ObjectID } from 'bson'
import { createContext, ReactNode, useEffect, useState } from 'react'
import api from '../services/api'

interface FavoriteContextData {
  list: CountryType[]
}

export const FavoriteContext = createContext({} as FavoriteContextData)

interface FavoriteProviderPros {
  children: ReactNode
}

interface CountryType {
  _id: ObjectID
  name: string
  favorite: boolean
}

export function FavoriteProvider({ children }: FavoriteProviderPros) {
  const [list, setList] = useState([])

  useEffect(() => {
    getApi()
  }, [])

  async function getApi() {
    await api('countries').then(response => {
      let loaded = []
      for (const i in response.data) {
        loaded.push({
          _id: response.data[i]._id,
          name: response.data[i].name,
          favorite: false
        })
      }
      setList(loaded)
    })
  }

  return (
    <FavoriteContext.Provider value={{ list }}>
      {children}
    </FavoriteContext.Provider>
  )
}
