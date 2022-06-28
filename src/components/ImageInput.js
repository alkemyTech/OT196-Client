import React, {useState} from "react";
import { Form, Image, Spinner } from "react-bootstrap";
import { uploadImage } from "../services/ImagesService";
import {errorAlert} from "../setupAlerts"
function ImageInput({ image, setImage }) {
  const [imageUploading, setimageUploading] = useState(false);

  // Change image based on the input
  const handleImage = async (e) => {
    try{
      setimageUploading(true);
      const newImage = e.target.files[0];
      const imageUrl = await uploadImage(newImage);
      setImage(imageUrl);
      setimageUploading(false);
    }
    catch{
      errorAlert({titleError: "Error al subir la imagen!"})
      setimageUploading(false);
    }
  };

  return (
    <>
      <Form.Group controlId="formFileSm" className="mb-3 mt-3">
        <Form.Label className="mb-1">Imagen</Form.Label>
        {image && !imageUploading ? (
          <Image fluid thumbnail className="d-block mx-auto mb-2" src={image} />
        ) : (
          <Spinner
            className="mx-auto d-block my-3"
            animation="border"
            variant="dark"
          />
        )}
        <Form.Control type="file" size="sm" onChange={handleImage} />
      </Form.Group>
    </>
  );
}

export default ImageInput;
