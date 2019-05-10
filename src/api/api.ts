/*
import nodeFetch from 'node-fetch';

const BACKEND_URL = "http://les.viter.dk:3030"

export function login(email: string, password: string): Promise<any> {
  return new Promise((resolve, reject) => {
    nodeFetch(`${BACKEND_URL}/auth/login`, {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => resolve(json));
  })
}

export function register(email: string, password: string): Promise<any> {
  return new Promise((resolve, reject) => {
    nodeFetch(`${BACKEND_URL}/auth/register`, {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => resolve(json));
  });
}
*/
