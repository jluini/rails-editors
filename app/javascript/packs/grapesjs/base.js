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
  
  return editor;
}
