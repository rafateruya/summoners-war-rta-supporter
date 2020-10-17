import { request } from "../httpRequester"

export const searchMonsters = async () => {
    const requestInit: RequestInit = {
        method: 'GET'
    }
    const response = await request('https://swarfarm.com/autocomplete/quick-search/', requestInit)
    console.log('responde: ', response)
}