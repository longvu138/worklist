import workdateActionTypes from "./workdateActionTypes";

export const setWorkDate = (workDate) => ({
  type: workdateActionTypes.SET_WORD_DATE,
  payload: workDate,
});
export const setWorkDateData = (workDateData) => ({
  type: workdateActionTypes.SET_WORD_DATE_DATA,
  payload: workDateData,
});

export const refreshWordDateDataId = (id) => ({
  type: workdateActionTypes.REFRESH_WORD_DATE_DATA_ID,
  payload: id,
});
