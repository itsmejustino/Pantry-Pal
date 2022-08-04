const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Contact extends Model{}

Contact.init(
    {
    id: {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          title:{
            type: DataTypes.STRING,
            allowNull: false
          },
          form: {
            type: DataTypes.STRING,
            allowNull: false
          }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'contact',
  }

)

module.exports = Contact;
