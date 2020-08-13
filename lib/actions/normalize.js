const _ = require('lodash');
const ActionError = require('../error');

function normalize(action) {
    const _action = { ...action };

    // METHOD
    if (_.isUndefined(action.method)) {
        _action.method = 'get';
    } else {
        _action.method = _.toLower(action.method);
    }

    // PATH
    if (_.isUndefined(action.path)) {
        throw new ActionError('you must provide path');
    }

    return action;
}
module.exports = normalize;
