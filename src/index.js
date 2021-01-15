const fs = require('fs');
const babel = require('@babel/core');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
// 读取 source.js 内容
let source = fs.readFileSync('./babel/source.js', {
    encoding: 'utf-8',
});

babel.parse(source, (err, ast) => {
    // console.log(JSON.stringify(ast));
    let indent = '';
    traverse(ast, {
        // 进入节点
        enter(path) {
            console.log(`${indent}<${path.node.type}>`);
            indent += ' ';
        },
        // 退出节点
        exit(path) {
            indent = indent.slice(0, -2);
            console.log(`${indent}</${path.node.type}>`);
        },
    });
    console.log(generator(ast).code);
});
