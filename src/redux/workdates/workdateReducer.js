import workdateActionTypes from "./workdateActionTypes";

const initialState = {
  workDate: "",
  workDateData: null,
  refreshWorkDateDataId: Math.random(),
};

const workdateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case workdateActionTypes.SET_WORK_DATE:
      return { ...state, workDate: payload };
    case workdateActionTypes.SET_WORK_DATE_DATA:
      return { ...state, workDateData: payload };
    case workdateActionTypes.REFRESH_WORK_DATE_DATA_ID:
      return { ...state, refreshWorkDateDataId: payload };
    default:
      return state;
  }
};

export default workdateReducer;
