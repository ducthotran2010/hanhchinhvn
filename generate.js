/* eslint-disable import/no-unresolved */
const fs = require("fs");
const provinceData = require("./provinces");
const districtData = require("./districts");

const vietnam = provinceData
  .map(p => ({
    ...p,
    districts: districtData
      .filter(d => d.parent_code === p.code)
      .sort((a, b) => {
        if (a.name_with_type < b.name_with_type) {
          return -1;
        }
        if (a.name_with_type > b.name_with_type) {
          return 1;
        }
        return 0;
      })
  }))
  .sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

fs.writeFile("generated.json", JSON.stringify(vietnam), function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved as `generated.json`!");
});
