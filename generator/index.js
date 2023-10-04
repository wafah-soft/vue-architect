const dependencies = require('./tasks/dependencies')
const modifyScripts = require('./tasks/modify-scripts')


module.exports = (api, options, rootOptions) => {
    dependencies(api);
    modifyScripts(api);
}