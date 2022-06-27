import axios from "axios";

const getToken = () => {
  const data = window.localStorage.getItem("userData");
  if (!data) return "";
  const token = JSON.parse(data).token;
  return token;
};

const getHeader = () => {
  const token = getToken();
  const header = token ? { Authorization: `Bearer ${token}` } : null;
  return header;
};

async function getRequest(link) {
  const header = getHeader();

  const response = await axios.get(link, {
    headers: header,
  });

  return response.data;
}

async function postRequest(link, values) {
  const header = getHeader();
  const response = await axios.post(
    link,
    {
      ...values,
    },
    {
      headers: header,
    }
  );

  return response.data;
}

async function putRequest(link, values) {
  const header = getHeader();

  const response = await axios.put(
    link,
    {
      ...values,
    },
    {
      headers: header,
    }
  );

  return response.data;
}

async function putRequest(link, values) {
  
  let jwtToken = ''
  let header = null
  
  if(window.localStorage.getItem("token")) {
    jwtToken = window.localStorage.getItem("token")
    header = { Authorization: `Bearer ${jwtToken}` }
  }

  let response = await axios.put(
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
  const header = getHeader();

  const response = await axios.delete(link, {
    headers: header,
  });

  return response.data;
}

export { deleteRequest, postRequest, getRequest, putRequest };
