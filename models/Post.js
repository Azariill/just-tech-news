// import model and datatypes for sequelize 
const {Model, DataTypes} = require('sequelize');

// import MySql Connection from connection.js
const sequelize = require('../config/connection');

// creat our Post Model

class Post extends Model{}

Post.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        post_url:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        user_id:{
            type: DataTypes.INTEGER,
            refrences: {
                model: 'user',
                key: 'id'
            }
        }
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post;