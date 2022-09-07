import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../database/index'

interface CompanyInstance extends Model {
    id: number
    name: string
    bio: string 
    website: string
    email: string
}

const Company = sequelize.define<CompanyInstance>(
    'companies',
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: DataTypes.STRING,
        website: DataTypes.STRING,
        email: DataTypes.STRING
    }
)

export { Company }