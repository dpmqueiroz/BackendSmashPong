import { Router } from "express";
import HealthCheckController from "../controller/HealthCheckController";

export default function HealthCheckRouter(router: Router) {

  router.get(
    '/healthCheck',
    HealthCheckController
  );
}