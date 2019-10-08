// requiring path and fs modules
const path = require('path')
const fs = require('fs')
const workLandingPage = require('./static/_pages/work.json')
// joining path of directory
const directoryPath = path.join(__dirname, 'static/_projects')
const destinationPath = path.join(__dirname, 'static/_pages')
const fileName = '/workData.json'
// const workFolderName = 'work'

const writeToDisk = (data) => {
  fs.writeFileSync(destinationPath + fileName, JSON.stringify(data, null, 2))
}

// const ProjectsFiles = populateProjectsAndGetFiles()

const slugs = workLandingPage.projects.map(item => path.basename(item))
  .map(item => item.split('.json')[0])

const pages = slugs.reduce((workPages, slug, index) => {
  const data = require('./static/_projects/' + slug + '.json')

  workPages[slug] = {
    ...data,
    slug
  }

  if (index + 1 < slugs.length) {
    workPages[slug].next = slugs[index + 1]
  } else {
    workPages[slug].next = slugs[0]
  }

  workPages[slug].meta = {
    title: data.title,
    description: data.caption,
    image: data.featured_image
  }

  return workPages
}, {})

writeToDisk(pages)

module.exports = pages
