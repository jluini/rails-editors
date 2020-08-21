import EditorJS from '@editorjs/editorjs';

class EditorJSWrapper {
  constructor(holderId, options) {
    this.holderId = holderId;
    this.editor = new EditorJS({
      holder: holderId,
      autofocus: true,
      tools: {
        // add editorjs tools here
      },
      ...options
    });
  }
}

export default EditorJSWrapper;
