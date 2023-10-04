module.exports = (api, projectOptions) => {
    api.registerCommand('list', {
        description: 'List of all architecture',
        usage: 'vue-cli-service list [architecture]',
        options: ["architecture"]
    }, (args) => {
        if (args._[0] === "architecture") {
            const aLists = [
                { "mvc": "Model-View-Controller" },
                { "mvvm": "Model-View-ViewModel" },
                { "mvp": "Model-View-Presenter" },
                { "component-based": "Component-Based" },
                { "flux/redux": "Flux/Redux" },
                { "event-driven": "Event-Driven" },
                { "micro-frontends": "Micro Frontends" },
                {
                    "ssr/static-site-generator":
                        "Server-Side Rendered & Static Site Generators",
                },
                { "pwa": "Progressive Web Apps" },
                { "spa": "Single Page Applications" },
                { "ddd": "Domain-Driven Design" },
            ];

            console.log("Available architectures:");

            aLists.forEach(item => {
                for (const [key, value] of Object.entries(item)) {
                    console.log(`- ${key}: ${value}`);
                }
            });
        }
        else {
            console.log("The command should be list architecture");
        }
    });
};