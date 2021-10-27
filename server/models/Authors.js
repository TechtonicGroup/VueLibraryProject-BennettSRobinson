module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    'Author',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
    },
    {
      paranoid: true,
    }
  );

  Author.associate = ({ Book }) => {
    Author.hasMany(Book);
  };

  return Author;
};
