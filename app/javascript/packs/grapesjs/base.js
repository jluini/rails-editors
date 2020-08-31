import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

/**
 * Required options:
 *  - containerId: id of the dom element for the editor
 * 
 * Optional:
 *  - htmlContent: starting content (use dom content if not specified)
 *  - height (default: '600px')
 *  - width (default: 'auto')
 */

export default function createEditor(options) {
  const editorConfig = {
    container: options.containerId,
    height: options.height || '600px',
    width: options.width || 'auto',
    storageManager: false,
    panels: { defaults: [] },
  };
  
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
        label: '<u>B</u>',
        command: 'sw-visibility', // Built-in command
      }, {
        id: 'export',
        className: 'btn-open-export',
        label: 'Exp',
        command: 'export-template',
        context: 'export-template', // For grouping context of buttons from the same panel
      }, {
        id: 'show-json',
        className: 'btn-show-json',
        label: 'JSON',
        context: 'show-json',
        command(editor) {
          editor.Modal.setTitle('Components JSON')
            .setContent(`<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`)
            .open();
        },
      }
    ],
  });
}
