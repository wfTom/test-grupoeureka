import { ReactNode } from 'react'

import { Container } from './styles'

interface FavoriteListProps {
  children: ReactNode
  title: string
}

function FavoriteList(props: FavoriteListProps) {
  return (
    <Container>
      <h1>{props.title}</h1>
      {props.children}
    </Container>
  )
}

export default FavoriteList
