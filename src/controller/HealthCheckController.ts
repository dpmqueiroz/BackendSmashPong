import { Request, Response } from "express";
import { HealthCheckService } from "../service/HealthCheckService";

export default async function HealthCheckController (request: Request, response: Response) :Promise<any> {
    try {
        const healthCheckService: HealthCheckService = new HealthCheckService();
        return response.json(await healthCheckService.showSuccessMessage())
    } catch (Error) {
        console.error(Error);
        return response.json(Error);
    }
}