import axios from "axios"

async function getRequest(link) {

  let jwtToken = ''
  let header = null

  if(window.localStorage.getItem("token")) {
    jwtToken = window.localStorage.getItem("token")
    header = { Authorization: `Bearer ${jwtToken}` }
  }

  let response = await axios.get(link, {
    headers: header
  })

  return response.data
}

async function postRequest(link, values) {
  
  let jwtToken = ''
  let header = null
  
  if(window.localStorage.getItem("token")) {
    jwtToken = window.localStorage.getItem("token")
    header = { Authorization: `Bearer ${jwtToken}` }
  }

  let response = await axios.post(
    link,
    {
      ...values,
      token: jwtToken
    }, {
    headers: header,
  }
  )
  return response.data
}

async function deleteRequest(link) {
  let response = await axios.delete(link)
  return response.data
}

export { deleteRequest, postRequest, getRequest }