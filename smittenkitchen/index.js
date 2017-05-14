const express = require('express')
const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const app = express()

const mapIndexToCategory = (idx) => {
  switch(idx) {
    case 0:
      return "General"
    case 1:
      return "Fruit"
    case 2:
      return "Sweets"
    case 3:
      return "Vegetable"
    default:
      return "Error"
  }
}

// Smitten Kitchen URL
const URL = 'https://smittenkitchen.com/recipes/'
let categories

app.get('/scrape', (req, res) => {
    request(URL, (err, response, html) => {
      if(err) res.send('request failed ....')

      // Load Cheerio Library
      const $ = cheerio.load(html)

      // Get Category Section Headers
      let recipeSections = ['General']
      // console.log('recipe sections are ...')
      $('h2').each(function(i, elem) {
        recipeSections.push($(this).text())
      })
      recipeSections = recipeSections.slice(0,4) // remove non relevant h2
      // console.log(recipeSections)

      // Build JSON
      categories = recipeSections.map((category) => {
        return { [category] : [] }
      })
      // console.log(categories)

      $('ul.smittenkitchen-recipe-listing').each(function(i, category) {
        $( $(category).html() + ' li' ).each(function(j, elem) {

          // Extract Data
          const subCategoryURL = $($(elem).html()).attr("href")
          const subCategoryCount = $($(elem).html()).toString()
            .replace( /^\D+/g, '').split('<')[0]
          const subCategoryTitle = $(elem).text()
            .replace(/\d/g, "").split('<')[0]

          // Create JSON object
          categories[i][mapIndexToCategory(i)].push({
            subCategoryURL,
            subCategoryTitle,
            subCategoryCount
          })
        })
      })

      fs.writeFile('output.json', JSON.stringify(categories, null, 4), function(err){
          console.log('File successfully written ... Beep bop');
      })

      res.send(categories)
    })

    // TODO Get list of items per sub category

    // TODO Get article + imgs for dish
})

app.listen('8081')
console.log('Magic happens on port 8081')
exports = module.exports = app
