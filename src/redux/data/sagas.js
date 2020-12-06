import {
  all,
  takeEvery,
  put,
  call,
  delay,
  select,

} from 'redux-saga/effects'
import actions from './actions'
import { dataService } from 'service/data.service'










// function* getAvailableRooms({ payload }){

//   yield put({
//     type : 'data/SET_STATE',
//     payload : {
//       loading_availableRooms: true
//     }

//   })


//   const r = yield call(dataService.getAvailableRooms, payload)


//   // yield delay(3000)
//   yield put({
//     type : 'data/SET_STATE',
//     payload : {
//       getAvailableRooms: r
//     }

//   })
//   yield put({
//     type : 'data/SET_STATE',
//     payload : {
//       loading_availableRooms : false
//     }

//   })
// }


export default function* rootSaga() {
  yield all([
    // takeEvery(actions.GET_USER, getHotel),
    // takeEvery(actions.getAvailableRooms, getAvailableRooms),
    // takeEvery(actions.getInitialState, getInitialState),
  ])
}
