import { Router } from "express";
import JogadorController from "../controller/JogadorController";

export default function JogadorRouter(router: Router) {

  router.get(
    '/jogador',
    JogadorController
  );
}