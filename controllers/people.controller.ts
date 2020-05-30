// @ts-ignore
import {Response, RouteParams, Router} from 'https://deno.land/x/oak/mod.ts'
// @ts-ignore
import peopleList from '../data/data.ts';

const PATHS: { [key: string]: any } = {
    people: '/people',
    peopleId: '/people/:id'
};

const people = ({response}: { response: Response }) => {
    response.status = 200;
    response.body = peopleList;
};

const peopleId = ({params, response}: { params: RouteParams, response: Response }) => {
    response.status = 200;
    response.body = peopleList.find(person => person.id === params.id);
};

const peopleController = new Router()
    .get(PATHS.people, people)
    .get(PATHS.peopleId, peopleId);


export default peopleController
