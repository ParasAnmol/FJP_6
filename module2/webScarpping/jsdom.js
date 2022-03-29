const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new jsdom(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent);