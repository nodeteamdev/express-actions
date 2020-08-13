class ActionError extends Error {
    constructor(message = 'no message provide') {
        super();
        this.name = 'E_EXPRESS_ACTIONS';
        this.message = message;
    }
}

module.exports = ActionError;
