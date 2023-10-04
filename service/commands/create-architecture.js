const fs = require('fs').promises;
const path = require('path')

module.exports = (api, pOptions) => {
    api.registerCommand('architecture', {
        description: "Setups the specified project architecture",
        usage: "vue-cli-service architecture [type]",
        options: ['spa']
    }, async (args) => {
        const type = args._[0];

        switch (type) {
            case 'spa':
                await handleSPA(api.getCwd());
                break;
            default:
                console.log('Unknown architecture type.');
        }
    });
};


async function handleSPA(projectRoot) {
    const directories = [
        "public",
        "src/assets",
        "src/components/common",
        "src/layouts",
        "src/views",
        "src/router",
        "src/store/modules",
        "src/services",
        "src/utils",
        "tests",
    ];
    
    for (let dir of directories) {
        await createDirectoryIfNotExists(path.join(projectRoot, dir));
    }

    // Add logic for other specific files if necessary
    // Check for their existence before writing them.
}

async function createDirectoryIfNotExists(dirPath) {
    try {
        await fs.access(dirPath);
        console.log(`Directory already exists: ${dirPath}`);
    }
    catch (err) {
        await fs.mkdir(dirPath, { recursive: true });
        console.log(`Created directory: ${dirPath}`);
    }
}