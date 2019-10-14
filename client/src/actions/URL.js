const URL_ROOT = 'http://localhost:3001'

const signinURL = URL_ROOT + '/signin'
const validateUrl = URL_ROOT + '/validate'


    const get = url =>
    fetch(url, {
      headers: {
        Authorization: localStorage.getItem('token'),
        credentials: 'include'
      }
    }).then(resp => resp.json())
  
  const post = (url, data) =>
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
        credentials: 'include'
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())

    const signIn = user => post(signinURL, user)
    const validate = () => get(validateUrl)


export default { signIn, validate }