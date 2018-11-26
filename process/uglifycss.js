const uglifycss = require('uglifycss')
const fs = require('fs')
const path = require('path')

const filePathSrc = path.join(__dirname, '..', 'src', 'styles', 'styles.css')
const filePathPub = path.join(__dirname, '..', 'public', 'styles.min.css')

const uglified = uglifycss.processFiles(
    [ filePathSrc ],
    { maxLineLen: 500, expandVars: true }
)// .uglified

fs.writeFile(filePathPub, uglified, err => {
    if(err) { return console.err(err) }
    console.log('Minified CSS to /public/styles.min.css')
})// .writeFile
