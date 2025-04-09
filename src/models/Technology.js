import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";
import Category from "./Category.js";


const Technology = sequelize.define(
    "Technology",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        imagen:{
            type: DataTypes.STRING(255),
            defaultValue:"https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
            allowNull: false,
        },
        category_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: Category,
                key: 'id'
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        } 
    },
    {
        tableName:"technology",
        timestamps: true,

    }
);

Technology.belongsTo(Category, { 
    foreignKey: 'category_id',
    as: 'category',
});


export default Technology;
    
