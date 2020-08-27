import Vue from 'vue'
import { Editor, EditorContent } from 'tiptap'

var app = new Vue({
  el: '#app',
  components: {
    'editor-content': EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        content: '<p>This is just a boring paragraph</p>',
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
});
