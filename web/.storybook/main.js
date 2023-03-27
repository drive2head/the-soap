const path = require("path");
module.exports = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app"
    ],
    resolve: {
        alias: {
            "@/*": path.resolve(__dirname, "../src/*")
        }
    }
};
