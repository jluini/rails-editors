import EditorJSWrapper from './editorjs-wrapper';

var wrapper = new EditorJSWrapper("editor-container", {
  onChange() {
    console.log("Editor content changed!");
  }
});

