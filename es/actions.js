import { SHOW, HIDE, DESTROY } from './actionTypes';
export function show(modal, props) {
  return {
    type: SHOW,
    payload: {
      modal: modal,
      props: props || {},
    },
  };
}
export function hide(modal) {
  return {
    type: HIDE,
    payload: {
      modal: modal,
    },
  };
}
export function destroy(modal) {
  return {
    type: DESTROY,
    payload: {
      modal: modal,
    },
  };
}
