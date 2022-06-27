import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signOff } from "../app/slice";

function HeaderAvatar() {
  const userData = useSelector((state) => state.USER_LOGIN);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userImage =
    userData.image ||
    "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";
  const isLogged = userData.isUserLogged || false;
  const roleId = userData.roleId || 2;

  const handleUserLogout = () => {
    // Remove data from store
    dispatch(signOff());
    // Remove data from localstorage
    localStorage.removeItem("userData");
    // Redirect to index
    window.location.replace("/");
  };

  return (
    <>
      <style type="text/css">{`
        .dropdown-toggle::before {
        display: none !important; 
        }
    `}</style>
      <Dropdown drop="start">
        <Dropdown.Toggle
          id="dropdown-button-dark-example1"
          variant="secondary"
          className="bg-transparent border-0"
        >
          <Image
            roundedCircle
            className="ratio ratio-1x1"
            src={userImage}
            style={{ height: "2.5rem", width: "2.5rem", objectFit: "cover" }}
          />
        </Dropdown.Toggle>

        {isLogged ? (
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => navigate("/my-profile")}>
              Mi perfil
            </Dropdown.Item>
            {roleId === 1 ? (
              <Dropdown.Item onClick={() => navigate("/backoffice")}>
                Backoffice
              </Dropdown.Item>
            ) : null}
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleUserLogout}>Salir</Dropdown.Item>
          </Dropdown.Menu>
        ) : (
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => navigate("/login")}>
              Ingresar
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/signup")}>
              Registrarse
            </Dropdown.Item>
          </Dropdown.Menu>
        )}
      </Dropdown>
    </>
  );
}

export default HeaderAvatar;
