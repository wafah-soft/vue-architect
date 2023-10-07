//static loading
export * from "./api/useApi";
export * from "./ui/useModal";
export * from "./state/useUserData";
export * from "./events/useWindowWidth";




//dynamic loading
// const requireContext = require.context(".", false, /\.js$/);
// const modules = {};

// requireContext.keys().forEach((file) => {
//     // Skip the current index.js file
//     if (file === "./index.js") return;

//     try {
//         // Extract the file name without its extension as the module name
//         const moduleName = file.replace(/(^\.\/)|(\.js$)/g, "");

//         // Dynamically import the module
//         modules[moduleName] = requireContext(file).default;
//     } catch (error) {
//         console.error(
//             `Failed to load module: ${file}. Reason: ${error.message}`
//         );
//         throw error; // re-throwing ensures the error isn't silently swallowed
//     }
// });

// export default modules;
