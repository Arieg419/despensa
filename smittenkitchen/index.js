const express = require("express");
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");
const app = express();
const jsonfile = require("jsonfile");

const mapIndexToCategory = idx => {
  switch (idx) {
    case 0:
      return "General";
    case 1:
      return "Fruit";
    case 2:
      return "Sweets";
    case 3:
      return "Vegetable";
    default:
      return "Error";
  }
};

// Smitten Kitchen URL
const URL = "https://smittenkitchen.com/recipes/";
let categories;

app.get("/subcategoryitems", (req, res) => {
  fs.readFile("./sub_categories.json", "utf8", (err, data) => {
    if (err) throw err;

    data = JSON.parse(data);

    let subcat_list = [];
    let recipeRet = [];

    // && `${item.subCategoryTitle}` == 'Orange'
    subcat_list = data[3][mapIndexToCategory(3)].map((item, i) => {
      if (
        typeof item.subCategoryURL != "undefined" &&
        !fs.existsSync(`${item.subCategoryTitle}`) &&
        `${item.subCategoryTitle}` == "Zucchini"
      ) {
        // Make HTTP request
        request(item.subCategoryURL, (err, response, html) => {
          if (err) res.send("request failed ....");

          // Load Cheerio Library
          const $ = cheerio.load(html);

          // Opening Brackets for JSON Array
          fs.appendFileSync(`${item.subCategoryTitle}.json`, `[`);

          // Scraping Recipe Entry per Category (General, Sweets, Vegetables, Fruit)
          $("#main li").each(function(i, recipeEntry) {
            // console.log(JSON.stringify($($(recipeEntry).html()).attr("href")))
            recipeRet.push(
              JSON.stringify($($(recipeEntry).html()).attr("href"))
            );
          });
          console.log(`writing new ${item.subCategoryTitle}.json file`);
          fs.appendFileSync(
            `${item.subCategoryTitle}.json`,
            JSON.stringify(`${recipeRet},`)
          );

          // Closing Brackets for JSON Array
          fs.appendFileSync(`${item.subCategoryTitle}.json`, `]`);
        });
        return recipeRet;
      }
    });
    res.send("Generating file...");
  });
});

app.get("/scrape_subcategories", (req, res) => {
  request(URL, (err, response, html) => {
    if (err) res.send("request failed ....");

    // Load Cheerio Library
    const $ = cheerio.load(html);

    // Get Category Section Headers
    let recipeSections = ["General"];
    // console.log('recipe sections are ...')
    $("h2").each(function(i, elem) {
      recipeSections.push($(this).text());
    });
    recipeSections = recipeSections.slice(0, 4); // remove non relevant h2

    // Build JSON
    categories = recipeSections.map(category => {
      return { [category]: [] };
    });

    $("ul.smittenkitchen-recipe-listing").each(function(i, category) {
      $($(category).html() + " li").each(function(j, elem) {
        // Extract Data
        const subCategoryURL = $($(elem).html()).attr("href");
        const subCategoryCount = $($(elem).html())
          .toString()
          .replace(/^\D+/g, "")
          .split("<")[0];
        const subCategoryTitle = $(elem)
          .text()
          .replace(/\d/g, "")
          .split("<")[0];

        // Create JSON object
        categories[i][mapIndexToCategory(i)].push({
          subCategoryURL,
          subCategoryTitle,
          subCategoryCount
        });
      });
    });

    fs.writeFile("output.json", JSON.stringify(categories, null, 4), function(
      err
    ) {
      console.log("File successfully written ... Beep bop");
    });

    res.send(categories);
  });
});

app.get("/readjson", (req, res) => {
  const file =
    "/Users/omergoldberg/Projects/Clones/despensa/smittenkitchen/Vegetable_Recipe_Links/Broccoli Rabe.json";
  jsonfile.readFile(file, function(err, obj) {
    if (err) {
      console.log(err);
    } else {
      res.send(obj);
    }
  });
});

app.listen("8081");
console.log("Magic happens on port 8081");
exports = module.exports = app;

// return { "SubCategoryItem": {
//   "title" : item.subCategoryTitle,
//   "url": item.subCategoryURL,
//  }
