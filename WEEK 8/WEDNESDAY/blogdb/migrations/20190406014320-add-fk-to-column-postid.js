'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint(
      'Comments',
      ['postid'],{
        type: 'FOREIGN KEY',
        name: 'FK_postid',
        references: {
          table: 'Posts',
          field: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      'Comments',
      'FK_postid'
    )
  }
};
