'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.STRING,
    commentid: DataTypes.INTEGER,
    postid: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) 
  {
    Comment.belongsTo(models.Post,
    {
      as: 'Post',
      foreignKey: 'postid'
    })  
  };
  return Comment;
};