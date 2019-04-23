'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint(
      'Comments', // table name
      ['postid'],
      { // column on which the constraint will be added
        type: 'FOREIGN KEY', // type of constraint
        name: 'FK_postid', // constraint name
        references: 
        {
          table: 'Posts',
          field: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      'Comments', // name of the table
      'FK_postid' // name of the constraint
    )
  }
};
