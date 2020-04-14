module.exports = (sequelize, DataTypes) => {
  //defines todo item; required to be a string
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  //query for a todo and include it's todo items, they'll be included under
  //the key todoItems
  Todo.associate = (models) => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems',
    });
  };
  return Todo;
};
