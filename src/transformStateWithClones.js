'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const history = [];
  let nextState = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      nextState = { ...nextState, ...action.extraData };
    } else if (action.type === 'removeProperties') {
      nextState = { ...nextState };

      for (const key of action.keysToRemove) {
        delete nextState[key];
      }
    } else if (action.type === 'clear') {
      nextState = {};
    }

    history.push({ ...nextState });
  }

  return history;
}

module.exports = transformStateWithClones;
