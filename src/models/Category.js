import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";

const Category = sequelize.define(
    "Category",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        icon:{
            type: DataTypes.STRING(255),
            allowNull: false,
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
        tableName:"category",
        timestamps: true,

    }
);
export default Category;