import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

/**
 * Required options:
 *  - containerId: id of the dom element for the editor
 * 
 * Optional:
 *  - htmlContent: starting content (use dom content if not specified)
 *  - layerManager: selector of the dom element where to show the layer manager
 *  - height (default: '600px')
 *  - width (default: 'auto')
 */

export default function createEditor(options) {
  const editorConfig = {
    container: options.containerId,
    height: options.height || '100%',
    width: options.width || 'auto',
    storageManager: {
      id: 'gjs-',
      type: 'remote',
      autosave: false,
      autoload: options.autoload || false,
      urlStore: 'store',
      urlLoad: 'load',
      headers: { 'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content') },
    },
  };
  
  const defaultPanels = [];
  
  if(options.layerManager) {
    editorConfig.layerManager = {
      appendTo: options.layerManager
    };
    
    defaultPanels.push({
      id: 'layers',
      el: '.panel__right',
      // Make the panel resizable
      resizable: {
        maxDim: 350,
        minDim: 200,
        tc: 0, // Top handler
        cl: 1, // Left handler
        cr: 0, // Right handler
        bc: 0, // Bottom handler
        // Being a flex child we need to change `flex-basis` property
        // instead of the `width` (default)
        keyWidth: 'flex-basis',
      },
    });
  }
  
  editorConfig.panels = { defaults: defaultPanels };
  
  if(options.htmlContent) {
    editorConfig.components = options.htmlContent;
  } else {
    editorConfig.fromElement = true;
  }
  
  const editor = grapesjs.init(editorConfig);
  
  addButtons(editor);
  
  return editor;
}

function addButtons(editor) {
  editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
  });
  editor.Panels.addPanel({
    id: 'basic-actions',
    el: '.panel__basic-actions',
    buttons: [
      {
        id: 'visibility',
        active: true, // active by default
        className: 'btn-toggle-borders',
        label: '<u>Bordes</u>',
        command: 'sw-visibility', // Built-in command
      }, {
        id: 'export',
        className: 'btn-open-export',
        label: 'Ver html/css',
        command: 'export-template',
        context: 'export-template', // For grouping context of buttons from the same panel
      }, {
        id: 'show-json',
        className: 'btn-show-json',
        label: 'Ver json',
        context: 'show-json',
        command(editor) {
          editor.Modal.setTitle('Components JSON')
            .setContent(`<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`)
            .open();
        },
      }, {
        id: 'store',
        className: 'btn-store',
        label: 'Guardar',
        context: 'store',
        command(editor) {
          editor.store(res => {
            if(typeof(res) == 'object' && res.data && res.data == 'ok') {
              alert('¡Guardado!');
            } else {
              alert('No se pudo guardar :(');
            }
          });
        },
      },
    ],
  });
  editor.on('storage:error', (err) => {
    alert(`No se pudo guardar. El error es:\n\n${err}`);
  });
}
