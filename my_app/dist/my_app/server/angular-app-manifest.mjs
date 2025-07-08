
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
    'index.csr.html': {size: 472, hash: '96d1fa0ad50f03100d2e1243d8fef378b48d47e1a49d33f3af703939dce0a3d3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 985, hash: '50b0e2a47e541a346c32ae3973ebea72cd9838b3447382417ec26cad7ebf8880', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21688, hash: 'e2c4277187516e4b081c5fc1ed47e17142899ca98b1195265a75c0be499c5221', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
