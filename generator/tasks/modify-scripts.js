module.exports = (api) => {
    api.extendPackage({
        scripts: {
            "mplugin": "echo 'Hello, from my plugion!'"
        }
    });
}