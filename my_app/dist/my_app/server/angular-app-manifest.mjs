
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
    'index.csr.html': {size: 472, hash: '0017ec3d7ee9c8d1e8f96fad90a56c88406e0e013461ab5643d4f08770d5d089', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 985, hash: '8fbe62d4b6746221c2fd128f5d32ce3b457b1556bae8871570a55678f6451f53', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21583, hash: '33c1059be9a6aeb51e0228786eb6fdef656815754e084766803909e875d354fd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
