import { Router } from "express";
import HealthCheckController from "../controller/HealthCheckController";

export default function HealthCheckRouter(router: Router) {

  console.log("Estou aqui dentro do Router")

  router.get(
    '/healthCheck',
    HealthCheckController
  );
}