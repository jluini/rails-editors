import EditorJSWrapper from './editorjs/wrapper';
import {getSampleDocument} from './editorjs/samples';

const codeArea = document.getElementById("code-area");
const resultContainer = document.getElementById("result-container");

var wrapper = new EditorJSWrapper("editor-container", {
  onChange() {
    generateResult();
  }
});

document.querySelector(".raw-to-editor").onclick = function() {
  setEditorData();
};

document.querySelector(".editor-to-raw").onclick = function() {
  showEditorData();
};

document.querySelector(".refresh-button").onclick = function() {
  generateResult();
};

document.querySelectorAll("[data-document-sample]").forEach(elem => {
  elem.onclick = function() {
    const documentName = this.getAttribute("data-document-sample");
    loadDocument(documentName);
  };
});

function setEditorData() {
  let content = getRawContent();
  if(typeof content == "object" && content.blocks) {
    wrapper.render(content);
  } else {
    console.warn("Can't parse content as a json object with a 'blocks' attribute");
  }
}

function showEditorData() {
  wrapper.getEditorData((data) => {
    showRawData(data);
  });
}

function generateResult() {
  wrapper.getEditorData((data) => {
    if(data.error) {
      resultContainer.innerHTML = `Error: ${data.error}`;
    } else {
      resultContainer.innerHTML = wrapper.renderHtml(data).html;
    }
  });
}

/*****************/

function getRawContent() {
  return JSON.parse(codeArea.value);
}

function showRawData(data) {
  let prettyCode = JSON.stringify(data, null, 2);
  codeArea.value = prettyCode;
}

function loadDocument(name) {
  let data = getSampleDocument(name);
  
  if(!data) {
    console.warn(`No sample document '${name}'`);
    return;
  }
  wrapper.render(data);
  showRawData(data);
}
