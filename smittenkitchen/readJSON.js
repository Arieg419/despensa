const jsonfile = require("jsonfile");
const file =
  "/Users/omergoldberg/Projects/Clones/despensa/smittenkitchen/Vegetable_Recipe_Links/Corn.json";
jsonfile.readFile(file, function(err, obj) {
  console.dir(obj);
});
