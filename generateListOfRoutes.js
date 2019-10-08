// requiring path and fs modules
const path = require('path')
const fs = require('fs')
// joining path of directory
const directoryPath = path.join(__dirname, 'static/_projects')
const workFolderName = 'work'

const normalizeToString = (option) => option
  .split('.json')[0]

module.exports = () => {
  const files = fs.readdirSync(directoryPath)

  return files.map(normalizeToString)
    .map(slug => `/${workFolderName}/${slug}`)
}
