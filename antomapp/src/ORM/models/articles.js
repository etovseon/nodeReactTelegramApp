const {sequelize,Sequelize} = require("./seq_con")
Articles = sequelize.define("articles", {
    name: {
      type: Sequelize.STRING
    },
    count: {
      type: Sequelize.INTEGER
    }
  });
module.exports = Articles;