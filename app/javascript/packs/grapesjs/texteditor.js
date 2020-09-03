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
      cmdBtnDesktopLabel: 'Escritorio',
      cmdBtnTabletLabel: 'Tablet',
      cmdBtnMobileLabel: 'Celular',
      
      // swichtVwBtnTitle: 'Delinear componentes', // does not work
      // fullScrBtnTitle: 'Pantalla completa', // does not work
      // expTplBtnTitle: 'Exportar html', // does not work
      modalTitleExport: 'Exportar html',
      modalTitleImport: 'Importar html',
    }
  }
});

// Add undo/redo buttons
editor.Panels.addButton('options', {
  id: 'undo',
  className: 'fa fa-undo',
  command: 'undo',
  attributes: { title: 'Deshacer' }
});
editor.Panels.addButton('options', {
  id: 'redo',
  className: 'fa fa-repeat',
  command: 'redo',
  attributes: { title: 'Rehacer' }
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

// Change import button icon
const importButton = editor.Panels.getButton('options', 'gjs-open-import-template');
importButton.set('className', 'fa fa-upload');

// Remove toggle-images button
const toggleImagesButton = editor.Panels.getButton('options', 'gjs-toggle-images');
editor.Panels.getPanel('options').get('buttons').remove(toggleImagesButton);
