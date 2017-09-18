import dispatcher from '../dispatcher'
// import $ from 'jquery'

export function GetMatches() {
  dispatcher.dispatch({type: "FETCH_DATA"});
  
}
// export function addMatch(match) {
//   dispatcher.dispatch({type: "ADD_MATCH", match});
// }