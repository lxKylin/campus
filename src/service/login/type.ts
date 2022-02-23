export interface IAccount {
  name: string
  password: string
  verify: string
}

export interface ILoginResult {
  id: number
  name: string
  token: any
}
