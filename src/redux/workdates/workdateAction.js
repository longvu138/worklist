import workdateActionTypes from "./workdateActionTypes";

export const setWorkDate = (workDate) => ({
  type: workdateActionTypes.SET_WORK_DATE,
  payload: workDate,
});
export const setWorkDateData = (workDateData) => ({
  type: workdateActionTypes.SET_WORK_DATE_DATA,
  payload: workDateData,
});

export const refreshWorkDateDataId = (id) => ({
  type: workdateActionTypes.REFRESH_WORK_DATE_DATA_ID,
  payload: id,
});
