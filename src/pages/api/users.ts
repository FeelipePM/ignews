/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Felipe' },
    { id: 2, name: 'Amanda' },
    { id: 3, name: 'Vinícius' },
  ]
  return response.json(users);
}