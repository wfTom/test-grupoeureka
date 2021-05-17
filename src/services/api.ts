import axios, { AxiosResponse } from 'axios'

// const api = axios.create({
//   baseURL: 'http://localhost:3003'
// })

export default async function api<T = any>(
  path: string
): Promise<AxiosResponse<T>> {
  return axios.get<T>('http://localhost:3000/api/' + path)

  // return axios.get<T>(process.env.NEXT_PUBLIC_URL + 'api/' + path)
}
