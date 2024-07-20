export const FETCH_MATCHES_REQUEST = "FETCH_MATCHES_REQUEST";
export const FETCH_MATCHES_SUCCESS = "FETCH_MATCHES_SUCCESS";
export const FETCH_MATCHES_FAILURE = "FETCH_MATCHES_FAILURE";
export const FILTER_MATCHES = "FILTER_MATCHES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const fetchMatchesRequest = () => ({ type: FETCH_MATCHES_REQUEST });
export const fetchMatchesSuccess = (matches) => ({
  type: FETCH_MATCHES_SUCCESS,
  payload: matches,
});
export const fetchMatchesFailure = () => ({ type: FETCH_MATCHES_FAILURE });

export const filterMatches = (filteredMatches) => ({
  type: FILTER_MATCHES,
  payload: filteredMatches,
});

export const addFavorite = (match) => ({
  type: ADD_FAVORITE,
  payload: match,
});
export const removeFavorite = (matchId) => ({
  type: REMOVE_FAVORITE,
  payload: matchId,
});
