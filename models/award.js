const Award = conn.define('award', {
  awardName: Sequelize.STRING
});

module.exports = Award;