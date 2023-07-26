export default function handleErrorFunction(error, t) {
  try {
    const errorRes = error.response.data.error;
    const { key } = errorRes.details;
    if (errorRes.status === 400) {
      if (key === "invalid_input") {
        try {
          const inputError =
            errorRes.details.specified.details.errors[0]["path"][0];
          switch (inputError) {
            case "lastName":
              return t("lastName");
            case "firstName":
              return t("firstName");
            case "email":
              return t("email");
            case "accountName":
              return t("accountName");
            case "subDomain":
              return t("subDomain");
            case "passwordConfirmation":
              return t("passwordConfirmation");
            case "confirmPassword":
              return t("passwordConfirmation");
            case "password":
              return t("password");
            case "currentPassword":
              return t("currentPassword");
            case "enterPassword":
              return t("enterPassword");

            default:
              return inputError;
          }
        } catch (err) {}
      }
      //
      else if (key === "exceed_login_count") {
        return "exceed_login_count";
      }
      //
      else if (key === "wrong_password") {
        return t("wrong_password");
      }
      //
      else if (key === "same_password") {
        return t("same_password");
      }
      //
      else if (key === "already_confirmed") {
        return "confirmed";
      }
      //
      else if (key === "not_match") {
        return t("notMatch");
      }
      //
      else if (key === "domain_existed") {
        return t("domain_existed");
      }
      //
      else if (key === "email_existed") {
        return t("email_existed");
      }
      //
      else if (key === "collaborate_existed") {
        return t("collaborate_existed");
      }
      //
      else if (key === "owner_existed") {
        return t("owner_existed");
      }
    }
    //
    else if (errorRes.status === 401) {
      if (key === "authentication_required") {
        return t("authentication_required");
      }
    }
    //
    else if (errorRes.status === 403) {
      if (key === "authorization_required") {
        return t("authorization_required");
      } else if (key === "same_organization_required")
        return "same_organization_required";
    }
    //
    else if (errorRes.status === 404) {
      if (key === "account_not_found") {
        return "account_not_found";
      } else if (key === "account_not_active") return "account_not_active";
      else if (key === "pseudonym_not_found") return "pseudonym_not_found";
      else if (key === "account_pseudonym_not_found")
        return "account_pseudonym_not_found";
      else if (key === "channel_not_found") return "channel_not_found";
    }
    //
    else if (errorRes.status === 500) {
      if (key === "internal_server_error") {
        return "internal_server_error";
      }
    } else {
      return "not_found_invalid"; //
    }
  } catch (err) {
    return "connection error"; //
  }
}
