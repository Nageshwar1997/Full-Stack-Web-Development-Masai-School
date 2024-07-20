import {
  fetchMatchesFailure,
  fetchMatchesRequest,
  fetchMatchesSuccess,
} from "./redux/actions";

const API_URL = "https://jsonmock.hackerrank.com/api/football_matches?page=2";

export const fetchMatches = () => async (dispatch) => {
  dispatch(fetchMatchesRequest());
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch(fetchMatchesSuccess(data.data)); // Ensure you're accessing the correct property
  } catch (error) {
    dispatch(fetchMatchesFailure());
  }
};
