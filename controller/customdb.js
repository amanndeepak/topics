var express = require("express");
var sql = require("mssql");
var app = express();
var Sequelize = require("sequelize");
const window = require("window");
new Sequelize("Customdata", "sa", "Chetu@123", {
  host: "localhost",
  dialect: "mssql",
  dialectOptions: {
    encrypt: true,
    trustServerCertificate: true,
    instanceName: "MSSQL2019",
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  port: 61652,
});

const save = (params) => {
  //     console.log("Json data format"+JSON.stringify(params))
  //    sequelize.query(`INSERT INTO CelopayData (fname) values ('${params.first_name}')`,
  //         // sequelize.query(`INSERT INTO CelopayData (Name,Value,Type) values ('${params[i].name}','${"tok_sandbox_"+encodedString}','${params[i].type}')`,
  //              { bind: ['active'], type: sequelize.QueryTypes.SELECT }
  //          ).then(function (projects) {
  //             console.log(projects)
  //          })
  console.log("hello" + params);
};

module.exports = {
  save,
};
