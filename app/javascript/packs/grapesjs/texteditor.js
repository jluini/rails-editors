import grapesjs from 'grapesjs';
import 'grapesjs-preset-newsletter';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.css';

const editor = grapesjs.init({
  container : '#gjs',
  storageManager: {
    id: 'gjs-',
    type: 'remote',
    autosave: false,
    autoload: true,
    urlStore: 'store',
    urlLoad: 'load',
    headers: { 'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content') },
  },
  plugins: ['gjs-preset-newsletter'],
  pluginsOpts: {
    'gjs-preset-newsletter': {
      modalTitleImport: 'Importar html',
      // ... other options
    }
  }
});

// Add save button
editor.Panels.addButton('options', {
  id: 'save',
  className: 'fa fa-save',
  command(editor) {
    editor.store(res => {
      if(typeof(res) == 'object' && res.data && res.data == 'ok') {
        alert('¡Guardado!');
      } else {
        alert('No se pudo guardar :(');
      }
    });
  },
  attributes: { title: 'Guardar' }
});
editor.on('storage:error', (err) => {
  alert(`No se pudo guardar. El error es:\n\n${err}`);
});

