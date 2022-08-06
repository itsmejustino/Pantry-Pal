// model for the recipies

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipe_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipe_img_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipe_ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    is_vegetarian: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_vegan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_low_carb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_gluten_free: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    contains_dairy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe",
  }
);

module.exports = Recipe;
