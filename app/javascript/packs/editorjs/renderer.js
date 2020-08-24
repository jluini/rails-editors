
export default class DocumentRenderer {
  blocksToHtml(blocks) {
    return blocks.map(blockToHtml).join("\n");
  }
}

const blockRenderers = {
  paragraph(data) {
    return `<p>${data.text}</p>`;
  },
  header(data) {
    return `<h${data.level}>${data.text}</h${data.level}>`;
  },
  list(data) {
    let tag = getListTag(data.style);
    if(!tag) {
      console.warn(`Unknown list style '${data.style}'`);
      return "";
    }
    
    return `<${tag}>${getListContent(data.items)}</${tag}>`
  },
  external_image(data) {
    return `<img src="${data.url}" />`;
  },
};

function blockToHtml(block) {
  if(blockRenderers[block.type]) {
    return blockRenderers[block.type](block.data);
  } else {
    console.warn(`Unknown block type '${block.type}'`);
    return "";
  }
}

function getListTag(style) {
  switch(style) {
    case "ordered":
      return "ol";
    case "unordered":
      return "ul";
    default:
      return false;
  }
}

function getListContent(items) {
  return items.map((item) => {
    return `<li>${item}</li>`;
  }).join("\n");
}
