import { Request, Response } from "express";
import { Candidate } from "../models";

export const candidatesController = {
  index: async (req: Request, res: Response) => {
    try {
      const candidates = await Candidate.findAll();
      return res.send(candidates);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  save: async (req: Request, res: Response) => {
    const { name, email, bio, phone, openToWork } = req.body;
    try {
      const candidate = await Candidate.create({
        name,
        email,
        bio,
        phone,
        openToWork,
      });
      return res.status(201).json(candidate);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  show: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const candidate = await Candidate.findByPk(id);

      res.status(201).json(candidate);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message });
      }
    }
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, bio, phone, openToWork } = req.body;
    try {
      const [affectedRows, candidates] = await Candidate.update({
        name,
        email,
        bio,
        phone,
        openToWork
      },{
        where: {id},
        returning: true
      })
      return res.status(200).json(candidates[0]);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message });
      }
    }
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await Candidate.destroy({ where: { id } });
      return res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message });
      }
    }
  },
};
