import createEditor from './grapesjs/base';

const editor = createEditor({
  containerId: '#gjs',
  layerManager: '.layers-container',
});

document.getElementById('gjs-input-button').onclick = function(event) {
  const importSource = document.getElementById('gjs-raw-input');
  const code = importSource.value;
  
  editor.DomComponents.getWrapper().set('content', '');
  editor.setComponents(code);
};
