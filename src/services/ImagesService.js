const { postRequest } = require("./RequestService");

const getBase64 = function (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

exports.uploadImage = async function (file){
    try{
        const image = await getBase64(file)
        const res = await postRequest('http://localhost:3000/images/', {image: image, name: file.name})
        return res
    }
    catch(e){
      throw new Error()
    }
}