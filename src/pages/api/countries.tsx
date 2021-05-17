import { ObjectID, ObjectId } from 'mongodb'
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

      res.status(200).json(response)
    } catch (err) {
      res
        .status(400)
        .json({ error: 'Desculpe, houve um problema no servidor.' })
    }
  } else {
    res.status(400).json({ error: 'Desculpe, houve um problema no servidor.' })
  }
}
