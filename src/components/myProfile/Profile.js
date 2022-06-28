import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import CustomModal from "./CustomModal";
import { getRequest } from "../../services/RequestService";
import "./Profile.css";
import BtnDelete from "../utils/BtnDelete";
import ImageInput from "../ImageInput"
import { FaSave } from "react-icons/fa"
import { signOff, updateUserLogged } from "../../app/slice";
import { useDispatch } from "react-redux";
import { errorAlert, successAlert } from "../../setupAlerts";

const Profile = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [image, setImage] = React.useState("");
  const [id, setId] = React.useState("");
  const dispatch = useDispatch();

  const { REACT_APP_BACKEND_AUTHME } = process.env;

  // Get the profile from the user currently logged in
  const getProfile = async () => {
    try {
      const response = await getRequest(REACT_APP_BACKEND_AUTHME);
      setFirstName(response.firstName);
      setLastName(response.lastName);
      setEmail(response.email);
      setImage(response.image);
      setId(response.id);
    } catch (e) {
      console.error(e);
    }
  };

  //   delete the profile currently logged in
  const deleteProfile = async (id) => {
    try {
      // Remove data from store
      dispatch(signOff());
      // Remove data from localstorage
      localStorage.removeItem("userData");
      // Redirect to index
      successAlert({titleSuccess: "Su cuenta ha sido borrada!", msgSuccess: "Todos tus datos han sido eliminados."})
      window.location.replace("/");
    } catch (e) {
      errorAlert({titleError: "Error al eliminar tu cuenta!", msgError: "Lo sentimos! Ha surgido un error al intentar borrar sus datos."})
      console.error(e);
    }
  };
  const updateProfile = async (input, property) => {
    try {
      // fake update:
      if (property === "firstName") {
        setFirstName(input);
      } else if (property === "lastName") {
        setLastName(input);
      } else if (property === "email") {
        setEmail(input);
      } else if (property === "image") {
        setImage(input);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const sendUpdate = async (data) => {
    try{
      dispatch(updateUserLogged({firstName, lastName, email, image}))
      successAlert({titleSuccess: "Perfil actualizado!", msgSuccess: "Los cambios han sido guardados con exito."})
    }
    catch(e){
      console.log(e)
      errorAlert({titleError: "Error al actualizar!", msgError: "Lo sentimos! Ha surgido un error al intentar actualizar sus datos."})
    }
  }

  React.useEffect(() => {
    getProfile();
  }, []);

  //   Prepare an array with data from the fake user
  const arrData = [
    {
      text: "Nombre:",
      item: firstName,
      onSubmitData: updateProfile,
      property: "firstName",
      inputClass: "text",
    },
    {
      text: "Apellido:",
      item: lastName,
      onSubmitData: updateProfile,
      property: "lastName",
      inputClass: "text",
    },
    {
      text: "Email:",
      item: email,
      onSubmitData: updateProfile,
      property: "email",
      inputClass: "email",
    }
  ];

  //   starting point for the value that will be unique key for each child in the list
  let rowId = 0;

  return (
    <>
      {arrData &&
        arrData.map((i) => (
          <Row className="mb-3" key={rowId++}>
            <Col
              sm={2}
              md={3}
              className="d-flex justify-content-center justify-content-sm-start justify-content-lg-center"
            >
              <h4>{i.text}</h4>
            </Col>
            <Col sm={7} md={6} className="d-flex justify-content-center mb-2">
              {i.inputClass === "image" ? (
                <Image thumbnail className="w-25" src={i.item} />
              ) : (
                <span>{i.item}</span>
              )}
            </Col>
            <Col
              sm={3}
              md={3}
              className="d-flex justify-content-center justify-content-sm-end justify-content-lg-center align-items-center"
            >
              <CustomModal
                text={i.text}
                item={i.item}
                btnLabel={i.btnLabel}
                onSubmitData={i.onSubmitData}
                property={i.property}
                inputClass={i.inputClass}
                className="mh-custom"
              />
            </Col>
          </Row>
        ))}
      <Row>
        <Col
          sm={2}
          md={3}
          className="d-flex justify-content-center justify-content-sm-start justify-content-lg-center"
        >
          <h4>{"Imagen:"}</h4>
        </Col>
        <Col sm={7} md={6} className="d-flex justify-content-center mb-2">
          <ImageInput image={image} setImage={setImage} />
        </Col>
      </Row>

      <Row>
        <Col
          lg={{ offset: 9 }}
          className="d-flex justify-content-center justify-content-sm-end justify-content-lg-center"
        >
          <div className="mb-3 mt-3">
            <Button onClick={sendUpdate} className="me-2 my-2">
              <FaSave /> Guardar cambios
            </Button>
            <BtnDelete
              btnLabel="Eliminar mi cuenta"
              apiRoute={REACT_APP_BACKEND_AUTHME}
              id=""
              msgWarning="¿Desea eliminar su cuenta?"
              arrFunc={[deleteProfile]}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
