import createEditor from './grapesjs/base';

const editor = createEditor({
  containerId: '#gjs',
  layerManager: '.layers-container',
  htmlContent: '<h1>Titulo nivel 1</h1><p>Parrafo <b>normal</b></p>',
});
