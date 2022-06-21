import { successAlert, errorAlert } from "../../setupAlerts";
import { postRequest } from "../../services/RequestService";

const submitForm = async (
  values,
  actions,
  url,
  setIsLoading,
  titleSuccess = "¡Gracias por enviar los datos!",
  msgSuccess = "Se ha realizado con éxito"
) => {
  try {
    setIsLoading({ status: true, message: "" });
    await postRequest(url, values);
    actions.resetForm();
    setIsLoading({ status: false, message: "" });
    successAlert({
      titleSuccess,
      msgSuccess,
    });
  } catch (e) {
    setIsLoading({ status: false, message: "" });
    console.error(e);
    errorAlert({});
  }
};

export default submitForm;
