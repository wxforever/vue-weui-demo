# cutprice

its a simple demo that I used to learn vuejs<br/>
I used vue-cli to generate this demo and add Weui and zepto library to it

the demo is aimed to  get user's selected commodity data and add it to url<br/>
after the user share this link,his friend can  help him to cut down price

the demo don't show any operation related to backstage database,because its different to circumstance 

notice that afteryou run npm install,you should change ./node_modules/zepto/package.json,add`"main":"./zepto.min.js",or webpack can't find zepto 

> cutprice

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
