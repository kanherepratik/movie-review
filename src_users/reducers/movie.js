const initialState = {
  
};

export default  (state = initialState, action) => {
  switch (action.type) {
      case "FETCH_MATCH_FAILED":
      {
        return {
          ...state,
            fetched:false,
            fetching:false,
        }
        break;
      }  
  }
  return state
}