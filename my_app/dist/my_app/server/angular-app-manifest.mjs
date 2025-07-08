
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/code-studios/BUILDINGWEBAPPS/62GsjBq/4200/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/code-studios/BUILDINGWEBAPPS/62GsjBq/4200"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 472, hash: 'e85c160a6fdcefbe6cb6b8f3080b835631aabe63beae7754a28b95b1e766b9a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 985, hash: '822724f3fd2b60e554d1bee8cc53b6bc919fb0612d4d7e4ce2946645b13cf608', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21700, hash: '84a42310de78f3cd136855edda42dffb3efa68464bb6d388a28592efaabe23d9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
