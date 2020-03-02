# VueFront OpenCart theme

This is a default OpenCart theme

## Installation
1. You must first install your VueFront Web App. [yarn create vuefront-app](https://github.com/vuefront/create-vuefront-app)
2. Run command `yarn add @vuefront/opencart-theme`
3. Edit files:
add to `vuefront.config.js` new item `theme`
```
  export default {
        theme: '@vuefront/opencart-theme',
```

add to `.env` file
```
VUEFRONT_THEME="@vuefront/opencart-theme"
```

4. Run command `yarn dev`

Enjoy!
