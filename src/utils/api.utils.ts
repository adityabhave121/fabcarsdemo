import { BASE_URL, APP_BASE_URL_METHOD } from "../Constants/app.constants";

export function callApi(apiBody, apiName: string) {
  const dataToResponse = {
    isError: false,
    data: "",
    error: "",
  };

  const finalUrl = `${BASE_URL}/${apiName}`;

  return fetch(finalUrl, {
    method: APP_BASE_URL_METHOD,
    body: JSON.stringify(apiBody),

    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      dataToResponse.isError = false;
      dataToResponse.data = json;
      dataToResponse.error = "";

      return dataToResponse;
    })
    .catch(function (error) {
      dataToResponse.isError = true;
      dataToResponse.data = "";
      dataToResponse.error = error;

      return dataToResponse;
    });
}
