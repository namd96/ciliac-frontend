import Agent from 'superagent';
var qs = require('qs')

// const baseUrl = "https://3c100fe1.ngrok.io"
const baseUrl = "http://localhost:8060"
export const requests = {
    get: (url, body) => {

        return Agent.get(`${baseUrl}/${url}`)
            .then((res) => {
                console.log("[from Agent]", res.body);
                return res.body
            })
    },
    post: (url, body) => {

        return Agent.post(`${baseUrl}/${url}`)
            .send(qs.stringify(body))
            .then((res) => {
                console.log("[from Agent]", res.body);
                return res.body
            })
    },
}