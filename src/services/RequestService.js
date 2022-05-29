import axios from "axios"

async function getRequest(link) {

  const jwtToken = window.localStorage.getItem("token")

  let response = await axios.get(link, {
    headers: { Authorization: `Bearer ${jwtToken}` }
  })

  return response.data
}

async function postRequest(link, values) {
  const jwtToken = window.localStorage.getItem("token")
  let response = await axios.post(
    link,
    {
      ...values,
      token: jwtToken
    }, {
    headers: { Authorization: `Bearer ${jwtToken}` }
  }
  )
  return response.data
}

async function deleteRequest(link) {
  let response = await axios.delete(link)
  return response.data
}

export { deleteRequest, postRequest, getRequest }