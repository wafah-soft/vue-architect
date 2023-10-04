const architecturelist = require('./commands/architecture-list')
const createArchitecture = require('./commands/create-architecture')

module.exports = (api, projectOptions) => {
    architecturelist(api, projectOptions);
    createArchitecture(api, projectOptions);
    // Register more commands...
};