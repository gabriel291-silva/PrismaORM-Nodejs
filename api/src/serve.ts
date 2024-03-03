import { routes } from './Routes/index';
import expres from 'express'

const app = expres()

app.use(expres.json());

app.use(routes)

app.listen(3333, () => console.log("teste"))
