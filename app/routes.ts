import { Router } from "express"
import UrlController from "./controllers/UrlController"
const routes = Router();

// route for registering new url
routes.post("/url", UrlController.store)

// route for accessing and verifying short url
routes.get("/show/:shortUrlCode", UrlController.show)

// route for listing all urls
routes.get("/list", UrlController.listUrls)


export default routes