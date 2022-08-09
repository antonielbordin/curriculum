/** @type {import('@sveltejs/kit').Config} */

import adapter from "@sveltejs/adapter-static";

const dev = "production" === "development";

const config = {
    /*
    kit: {
    adapter: adapter(),
    prerender: {
      default: true,
    },     
     
    // enable this base url for publish in github pages
    paths: {      
      base: process.env.NODE_ENV === "production" ? "/curriculum" : "",
    }    
  },*/ 
  
  kit: {    
    adapter: adapter({
      pages: 'build',  // path to public directory
      assets: 'build',  // path to public directory
      fallback: null
    }),

    prerender: {
      default: true,
    }, 

    paths: {
      // change below to your repo name
      // base: dev ? "" : "/curriculum",
  },

  }
 







};

export default config;
