import { ObjectID } from 'mongodb'
import { useContext, useEffect, useState } from 'react'
import { FavoriteContext } from '../../contexts/FavoriteContext'

import { Container } from './styles'

interface CountryType {
  _id: ObjectID
  name: string
  favorite: boolean
}

interface ItemsProps {
  favorite: boolean
  button1: string
  button2: string
}

function Items(props: ItemsProps) {
  const { list } = useContext(FavoriteContext)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(count + 1)
  }, [favorite, list])

  function favorite(item: CountryType) {
    item.favorite = !item.favorite
  }

  return (
    <>
      {list &&
        list?.map(
          item =>
            item.favorite === props.favorite && (
              <Container key={item.name}>
                <div>
                  <h3>{item.name}</h3>

                  {item.favorite === true && <img src="/star.svg" />}
                </div>

                <div>
                  {item.favorite === props.favorite ? (
                    <button onClick={() => favorite(item)}>
                      {props.button1}
                    </button>
                  ) : (
                    <button onClick={() => favorite(item)}>
                      {props.button2}
                    </button>
                  )}
                </div>
              </Container>
            )
        )}
    </>
  )
}

export default Items
