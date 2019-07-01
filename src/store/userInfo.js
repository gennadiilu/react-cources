import { Map } from 'immutable';
import { handleActions } from 'redux-actions';

export const initialUserInfoState = Map({ userId: '111111111' });

const userInfo = handleActions({}, initialUserInfoState);

export default userInfo;
