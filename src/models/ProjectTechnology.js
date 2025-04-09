import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";
import Project from "./models/Project.js";
import Technology from "./models/Technology.js";


const ProjectTechnology= sequelize.define(
    "ProjectTechnology",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        project_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: Project,
                key: 'id'
            }
        
        },
        technology_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: Technology,
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
        tableName:"project_technology",
        timestamps: true,

    }
);

ProjectTechnology.belongsTo(Project, { 
    foreignKey: 'project_id',
    as: 'project',
});

ProjectTechnology.belongsTo(Technology, { 
    foreignKey: 'technology_id',
    as: 'technology',
});


export default ProjectTechnology;
