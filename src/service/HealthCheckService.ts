export class HealthCheckService {

    async showSuccessMessage(){
        return {status: 201, message: 'tudo ok!'}
    }
}