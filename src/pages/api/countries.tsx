import { ObjectID } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../services/database'

interface ErrorResponseType {
  error: string
}

interface SuccessResponseType {
  _id: ObjectID
  name: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType[]>
): Promise<void> => {
  if (req.method === 'GET') {
    try {
      const { db } = await connect()
      const response = await db.collection('countries').find().toArray()

      const countries = [
        { _id: new ObjectID('60a056a8081ca135800d620a'), name: 'Brasil' },
        { _id: new ObjectID('60a17c5d081ca135800d620c'), name: 'Canadá' },
        { _id: new ObjectID('60a07511081ca135800d620b'), name: 'EUA' },
        { _id: new ObjectID('60a1b206081ca135800d620d'), name: 'França' },
        { _id: new ObjectID('60a1b21a081ca135800d620e'), name: 'Alemanha' },
        { _id: new ObjectID('60a1b232081ca135800d620f'), name: 'Japão' },
        { _id: new ObjectID('60a1b243081ca135800d6210'), name: 'China' }
      ]

      res.status(200).json(countries)
    } catch (err) {
      res
        .status(400)
        .json({ error: 'Desculpe, houve um problema no servidor.' })
    }
  } else {
    res.status(400).json({ error: 'Desculpe, houve um problema no servidor.' })
  }
}
