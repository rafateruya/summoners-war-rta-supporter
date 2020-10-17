export const request = (url: string, data: RequestInit) =>
    new Promise<any>(async (resolve, reject) => {
        try {
            const response = await fetch(url, data)
            if (response) {
                const textResponse = await response.text()
                const jsonResponse = safeJsonParse(textResponse)
                if (!response.ok) {
                    reject({ error: jsonResponse || textResponse })
                }
                resolve(jsonResponse || textResponse)
            }
        } catch (err) {
            reject({ error: err })
        }
    })

const safeJsonParse = (str: string) => {
    try {
        const json = JSON.parse(str)
        return json
    } catch (e) {
        return false
    }
}
