import { createSelector } from 'reselect';

const getUserInfo = createSelector(
  state => state.get('userInfo'),
  userInfo => userInfo
);

export default getUserInfo;
