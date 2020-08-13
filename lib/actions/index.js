const glob = require('glob');
const path = require('path');
const _ = require('lodash');

const normalize = require('./normalize');
const saveActions = require('./saveActions');

class Actions {
    constructor(options) {
        this.config = options;
        this.app = options.app;

        this.readActions();
    }

    readActions() {
        glob.sync(`./${this.config.folders.actions}/**/*.js`).forEach((file) => {
            // eslint-disable-next-line
            const action = require(path.resolve(file));
            const normalaize = normalize(action);

            saveActions(file, action);

            if (_.isArray(normalaize.handlers) || _.isFunction(normalaize.handlers)) {
                return this.app[normalaize.method](
                    normalaize.path,
                    normalaize.handlers,
                    normalaize.fn,
                );
            }

            return this.app[normalaize.method](
                normalaize.path,
                normalaize.fn,
            );
        });
    }
}

module.exports = Actions;
