import createDataContext from "./createDataContext";
import { navigate } from "../navigationRef";
import Firebase from "../config/Firebase/firebase";

const authReducer = (state, action) => {
  switch (action.type) {
    case "clear_error_message":
      return { errorMessage: "" };
    case "add_error":
      return { errorMessage: action.payload };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => () => {
  Firebase.checkUserAuth((user) => {
    if (user) {
      navigate("Dashboard");
    } else {
      navigate("Signin");
    }
  });
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => (email, password, setLoading) => {
  Firebase.signupWithEmail(email, password)
    .then(() => {
      dispatch({ type: "clear_error_message" });
      setLoading(false);
      navigate("AccountCreate");
    })
    .catch((err) => {
      setLoading(false);
      dispatch({ type: "add_error", payload: err.message });
    });
};

const signin = (dispatch) => (email, password, setLoading) => {
  Firebase.loginWithEmail(email, password)
    .then(() => {
      dispatch({ type: "clear_error_message" });
      setLoading(false);
      navigate("Dashboard");
    })
    .catch((err) => {
      setLoading(false);
      dispatch({
        type: "add_error",
        payload: err.message,
      });
    });
};

const signout = (dispatch) => async () => {
  await Firebase.signOut();
  dispatch({ type: "clear_error_message" });
  navigate("loginFlow");
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    signin,
    signout,
    signup,
    clearErrorMessage,
    tryLocalSignin,
  },
  { errorMessage: "" }
);
