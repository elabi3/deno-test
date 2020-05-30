// @ts-ignore
import {Application} from 'https://deno.land/x/oak/mod.ts'
// @ts-ignore
import peopleController from './controllers/people.controller.ts';

const PORT = 8080;

async function startServer(port: number): Promise<void> {
    const app = new Application();

    app.use(peopleController.routes());
    app.use(peopleController.allowedMethods());

    return await app.listen({port});

}

startServer(PORT);
