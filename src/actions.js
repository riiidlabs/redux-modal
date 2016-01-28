import { INIT, SHOW, HIDE, DESTROY } from './actionTypes'

export function init(modal) {
  return {
    type: INIT,
    payload: {
      modal
    }
  }
}

export function show(modal, params = {}) {
  return {
    type: SHOW,
    payload: {
      modal,
      params
    }
  }
}

export function hide(modal) {
  return {
    type: HIDE,
    payload: {
      modal
    }
  }
}

export function destroy(modal) {
  return {
    type: DESTROY,
    payload: {
      modal
    }
  }
}