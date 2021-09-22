import workdateActionTypes from "./workdateActionTypes";

const initialState = {
  workDate: "",
  workDateData: null,
  refreshWordDateDataId: Math.random(),
};

const workdateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case workdateActionTypes.SET_WORD_DATE:
      return { ...state, workDate: payload };
    case workdateActionTypes.SET_WORD_DATE_DATA:
      return { ...state, workDateData: payload };
    case workdateActionTypes.REFRESH_WORD_DATE_DATA_ID:
      return { ...state, refreshWordDateDataId: payload };
    default:
      return state;
  }
};

export default workdateReducer;
