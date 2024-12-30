export default function apiEndpoint(summary: string, description: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
        // Aqui você pode adicionar lógica para registrar informações sobre a rota
        console.log(`Rota: ${target.constructor.name}.${propertyKey}`);
        console.log(`Resumo: ${summary}`);
        console.log(`Descrição: ${description}`);
        return originalMethod.apply(this, args);
      };
    };
}