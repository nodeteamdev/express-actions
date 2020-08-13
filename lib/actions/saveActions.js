const path = require('path');
const _ = require('lodash');
const ActionError = require('../error');

function saveActions(filePath, action) {
    const name = path
        .basename(filePath)
        .replace('.js', '');
    const camelName = _.camelCase(name);

    if (_.isUndefined(global.actions[camelName])) {
        global.actions[camelName] = action;
    } else {
        throw new ActionError(`Action with name ${camelName} already exists.`);
    }
}
module.exports = saveActions;
