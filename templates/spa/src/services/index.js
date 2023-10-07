const requiresModules = require.context("./modules", false, /\.service\.js$/);
const services = {};

requiresModules.keys().forEach(fileName => {

    try {
        // avoid importing index.js file
        if (fileName === './index.js') return;

        // format the service name: ./xyz.service.js
        const serviceName = fileName.replace(/^\.\/(.*)\.\w+$/, "$1");

        const serviceModule = requiresModules(fileName).default;

        // validate the service if need. it's a basic example.
        if (typeof serviceModule !== 'object' || !serviceModule) {
            console.warn(
                `Service ${serviceName} does not export an object and might not conform to expected format.`
            );
            return;
        }

        services[serviceName] = serviceModule;
    }
    catch (error) {
        console.error(`Error importing service from file ${fileName}:`, error);
    }
});

export default services;