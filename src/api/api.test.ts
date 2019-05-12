//import { login, register } from './api'
//import { IAccount } from '../types/types'
import { login } from './mocks/api.mock'

/*

id: number,
  email: string,
  pass: string,
  role: "admin" | "teacher",
  name: string

*/

describe("Testing login and register", () => {
  test("Testing login", async () => {
    expect(await login("sutteman@bingo.dk", "bingo1234"))
  })

  test("Testing register", async () => {
    
  })
})
