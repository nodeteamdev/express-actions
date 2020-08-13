const _ = require('lodash');
const Actions = require('./actions/index');
const ActionError = require('./error');

const DEFAULT_CONFIG = {
    private: {},
    folders: {
        actions: 'actions-test',
        helpers: 'helpers-test',
    },
};

global.actions = global.actions || {};
global.helpers = global.helpers || {};

module.exports = (options) => {
    if (!_.isFunction(options.app)) {
        throw new ActionError('you must provide APP insinceof Express Application');
    }

    DEFAULT_CONFIG.private.actions = new Actions(_.merge(DEFAULT_CONFIG, options));

    return (req, res, next) => {
        next();
    };
};
