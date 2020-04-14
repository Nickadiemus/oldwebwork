module.exports = (sequelize, DataTypes) => {
  //defines TodoItem; required to be a string and boolean to check completed
  const TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false, //requires content to be a string
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, //requires done to be a boolean
    },
  });
  //allows use of TodoItems with Todo objects
  TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE', //Tells Postgres that if we delete a todo,
    });
  };

  return TodoItem;
};
