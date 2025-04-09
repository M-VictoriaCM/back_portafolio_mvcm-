import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";
import User from "./User.js";

const Project = sequelize.define(
    "Project",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        imagen:{
            type: DataTypes.STRING(255),
            defaultValue:"https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg",
            allowNull: true,
        },
        demo:{
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        repository:{
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: User,
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
    },{
        tableName:"project",
        timestamps: true,
    }
);

Project.belongsTo(User, { 
    foreignKey: 'user_id',
    as: 'user',
});


export default Project;