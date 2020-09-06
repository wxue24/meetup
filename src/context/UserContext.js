import createDataContext from "./createDataContext";
import { navigate } from "../navigationRef";
import Firebase from "../config/Firebase/firebase";

const userReducer = (state, action) => {
  const pl = action.payload;
  switch (action.type) {
    case "get_data":
      return action.payload;
    case "set_first":
      return { ...state, firstName: pl };
    case "set_last":
      return { ...state, lastName: pl };
    case "set_school":
      return { ...state, highSchool: pl };
    case "set_grade":
      return { ...state, grade: pl };
    case "set_hobbies":
      return { ...state, hobbies: pl };
    case "set_address":
      return { ...state, location: { ...state.location, address: pl } };
    case "set_city":
      return { ...state, location: { ...state.location, city: pl } };
    case "set_state":
      return { ...state, location: { ...state.location, state: pl } };
    case "set_zip":
      return { ...state, location: { ...state.location, zip: pl } };
    default:
      return state;
  }
};

const setFirst = (dispatch) => (first) => {
  dispatch({ type: "set_first", payload: first });
};

const setLast = (dispatch) => (last) => {
  dispatch({ type: "set_last", payload: last });
};

const setSchool = (dispatch) => (school) => {
  dispatch({ type: "set_school", payload: school });
};

const setGrade = (dispatch) => (grade) => {
  dispatch({ type: "set_grade", payload: grade });
};

const setAddress = (dispatch) => (address) => {
  dispatch({ type: "set_address", payload: address });
};

const setCity = (dispatch) => (city) => {
  dispatch({ type: "set_city", payload: city });
};

const setState = (dispatch) => (state) => {
  dispatch({ type: "set_state", payload: state });
};

const setZip = (dispatch) => (zip) => {
  dispatch({ type: "set_zip", payload: zip });
};

const getUserData = (dispatch) => () => {
  Firebase.getAccountData().then((doc) => {
    dispatch({ type: "get_data", payload: doc.data() });
  });
};

const setHobbies = (dispatch) => (hobbies) => {
  dispatch({ type: "set_hobbies", payload: hobbies });
};

const createNewUser = (dispatch) => (setLoading) => {
  //   hobbies is an array
  Firebase.editAccount(state)
    .then(() => {
      navigate("mainFlow");
    })
    .catch((err) => {
      console.log(err.message);
      setLoading(false);
    });
};

const editUser = (dispatch) => (setLoading) => {
  Firebase.editAccount(state)
    .then(() => {
      navigate("Account");
    })
    .catch((err) => {
      console.log(err.message);
      setLoading(false);
    });
};

//Helper functions
const constructLocation = (userData) => {
  const { address, city, state, zip } = userData;
  const location = `${address}, ${city}, ${state}, ${zip}`;
  return {};
};

export const { Context, Provider } = createDataContext(
  userReducer,
  {
    createNewUser,
    getUserData,
    editUser,
    setFirst,
    setLast,
    setSchool,
    setGrade,
    setAddress,
    setCity,
    setState,
    setZip,
    setHobbies,
  },
  {
    firstName: "",
    zipName: "",
    highSchool: "",
    grade: 9,
    //avatar: null
    location: {
      address: "",
      zip: "",
      city: "",
      state: "",
    },
    hobbies: [],
  }
);
