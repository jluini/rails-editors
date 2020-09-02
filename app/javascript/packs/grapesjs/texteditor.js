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
