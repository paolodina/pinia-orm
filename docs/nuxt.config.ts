export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  runtimeConfig: {
    public: {
      plausible: {
        domain: 'pinia-orm.codedredd.de'
      },
      algolia: {
        apiKey: '2a399a1ca2c1fa45dc7b5e4381952dd8',
        applicationId: 'CUDIBUZGZJ',
        docSearch: {
          indexName: 'pinia_orm_docs'
        }
      },
    }
  },
  app: {
    pageTransition: false,
    layoutTransition: false
  },
  build: {
    transpile: [/content-edge/]
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/404.html']
    }
  },
  github: {
    owner: 'CodeDredd',
    repo: 'pinia-orm',
    branch: 'master',
    token: process.env.GITHUB_TOKEN
  },
  modules: ['@nuxtlabs/github-module', 'vue-plausible'],
  colorMode: {
    preference: 'dark',
  },
})
