import { Request, Response } from "express";
import { JogadorService } from "../service/JogadorService";

export default async function JogadorController (request: Request, response: Response) :Promise<any> {
    try {
        const jogadorService: JogadorService = new JogadorService();
        let jogador = jogadorService.createJogador({
            email: "qualquerum",
            nome: "nomeQualquer",
            nickname: "serve",
            urlFoto: "dsfjakfdjklsajfdakls",
            createdAt: new Date(),
        });
        return response.json()
    } catch (Error) {
        console.error(Error);
        return response.json(Error);
    }
}