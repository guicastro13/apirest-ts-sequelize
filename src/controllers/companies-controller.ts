import { Request, Response } from "express";
import { Company } from "../models/company";

export const companiesController = {
    index : async (req: Request, res: Response) => {
        try {
            const companies = await Company.findAll()  
            res.status(200).json(companies)
        } catch (err) {
            if (err instanceof Error) {
                res.status(400).json({message: err.message})
            }
        }
    },
    save : async (req: Request, res: Response) => {
        const { name, bio, website, email} = req.body
        try {
            const company = await Company.create({ 
                name,
                bio,
                website, 
                email
            })
            res.status(200).json(company)
        } catch (err) {
            if (err instanceof Error) {
                res.status(400).json({ message: err.message})
            }
        }
    },
    show : async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const company = await Company.findByPk(id)
            res.status(200).json(company)
        } catch (err) {
            if (err instanceof Error) {
                res.status(400).json({message: err.message})
            }
        }
    },
    update: async (req:Request, res: Response) => {
        const { id } = req.params
        const { name, bio, website, email} = req.body
        try {
            const company = await Company.findByPk(id)
            if (company == null) {
                return res.status(404).json({message: "didn't find this company."})
            }
            company.name = name
            company.bio = bio
            company.website = website
            company.email = email
            await company.save()
        } catch (err) {
            if (err instanceof Error) {
                res.status(400).json({ message: err.message})
            }
        }
    },
    delete: async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            await Company.destroy({where:{id}})
        } catch (err) {
            if (err instanceof Error) {
                res.status(400).json({ message: err.message})
            }
        }
    }
}