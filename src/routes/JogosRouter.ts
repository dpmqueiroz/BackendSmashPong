import { Router } from "express";
import { JogosController } from "../controller/JogosController";

export default function JogosRouter(router: Router) {

  router.post(
    '/jogos',
    JogosController
  );
}