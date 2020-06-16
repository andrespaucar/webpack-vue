## INIT 
    npm install
## DEVELOPMENT 
    npm run start
## PRODUCTION
    npm run build

<hr/>

## Webpack
    npm i webpack webpack-cli webpack-dev-server clean-webpack-plugin -D

## VUE
    npm i vue-loader vue-template-compiler -D

## BABEL
    npm i @babel/cli @babel/core @babel/preset-env babel-loader -D

## HMTL
    npm i html-webpack-plugin -D

## AUTOPREFIXER
    npm i autoprefixer postcss-loader -D

## CSS
    npm i css-loader vue-style-loader mini-css-extract-plugin -D

## SASS
    npm i sass-loader node-sass -D

## IMGAENES
    npm i image-webpack-loader -D

## FILES
    npm i file-loader -D

### DEPENDECIES - PRODUCTION
    -P : significa que instalamos como una dependecia de produccion
    vue : necesitamos esto para hacer Vue Apps.

    npm i -P vue
    
    npm i -P vue-router

    npm i -P vuex

## ICONS - FONT AWESOME FREE

    npm i @fortawesome/fontawesome-svg-core -D
    npm i @fortawesome/vue-fontawesome -D

    npm i @fortawesome/free-solid-svg-icons -D
    npm i @fortawesome/free-regular-svg-icons -D
    npm i @fortawesome/free-brands-svg-icons -D

[https://github.com/FortAwesome/vue-fontawesome#basic]

### main.js

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    Vue.component('fa',FontAwesomeIcon);

### App.vue

    <fa :icon="faUserSecret" />
    <fa :icon="faCircleNotch" spin   />
    <fa :icon="faSpinner" pulse  size="lg" />
    ....

    import {faUserSecret,faSpinner,faCircleNotch} from '@fortawesome/free-solid-svg-icons'

    ....
    computed:{
        faUserSecret : () => faUserSecret,
        faSpinner : () => faSpinner,
        faCircleNotch : () => faCircleNotch,
    }
    ....
