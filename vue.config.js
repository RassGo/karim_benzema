const { defineConfig } = require('@vue/cli-service');

//Needed to correctly find the config file
//Tell vue to use relative path in production and absolute path in devlopment
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV  ===  'production'  ?  './'  :  '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/components/Style/Main.scss";`
      },
    },
  },
});
