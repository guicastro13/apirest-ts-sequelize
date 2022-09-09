import { Model , DataTypes} from "sequelize";
import { sequelize } from '../database'

interface JobsInstance extends Model {
    id: number
    title: string
    description: string
    limiteDate: Date
    companyId: number
}

export const Job = sequelize.define<JobsInstance>(
    'jobs',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        limiteDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'companies',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT'
        }
    }
)