import * as types from '../people/types';

export const doNothing = (payload) => ({
  type: types.DO_NOTHING,
  payload: payload,
});

