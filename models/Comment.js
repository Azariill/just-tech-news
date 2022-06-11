const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{}


Comment.init(
    {
        //columns will go here
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                min: 4
            }


        },

        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            refrences:{
                model: 'user',
                key: 'id'
            }
       
        },
        post_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            refrences:{
                model: 'post',
                key: 'id'
            }
        }
    },


    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;