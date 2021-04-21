import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsController {
    async create(request: Request, response: Response) {
        const { chat, username } = request.body
        const settingsRepository = getCustomRepository(SettingsRepository);
    
        const setting = settingsRepository.create({
            chat,
            username
        });
    
        await settingsRepository.save(setting);
    
        response.json(setting);
    }
}

export { SettingsController }