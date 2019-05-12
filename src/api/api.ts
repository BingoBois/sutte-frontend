// import { IAccount } from 'types/types';
import axios from 'axios';
import { IAccount } from 'types/types';
const BACKEND_URL = process.env.BACK_URL ? process.env.BACK_URL : "http://localhost:3000"

export function login(email: string, password: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify({email, password}),
      url: `${BACKEND_URL}/auth/login`
    }).then(r => {
      if(r.data.err){ reject(r.data) }
      resolve(r.data)
    })
  })
}

export function register(account: IAccount): Promise<boolean> {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(account),
      url: `${BACKEND_URL}/auth/register`
    }).then(r => {
      if(r.data.err){ reject(r.data) }
      console.log(r.data)
      resolve(r.data)
    })
  })
}
