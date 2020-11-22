import { Request, Response } from "express";
import UrlModel from "../models/Url";



export default {
  // saves Url
  async store(req: Request, res: Response) {
    console.log('REQUEST BODY', req.body)

    // check if the url is empty
    if (!req.body.fullUrl) {
      return res.status(400).json({ error: "URL can not be empty" })
    }
    const foundUrl = await UrlModel.findOne({
      fullUrl: req.body.fullUrl
    })
    if (!foundUrl) {
      // .create() saves every doc in docs
      const success = await UrlModel.create(req.body)
      return res.status(200).json(success)
    }
    return res.json(foundUrl)
  },


  // verifying short Url
  async show(req: Request, res: Response) {
    // find url param code
    const foundCode = await UrlModel.findOne({
      shortUrlCode: req.params.shortUrlCode
    })


    if (!foundCode) {
      return res.status(404).json({ error: "Url not found" })
    }

    return res.json(foundCode);
  },



  async listUrls(req: Request, res: Response) {
    const listAll = await UrlModel.find({})

    return res.json(listAll)
  }
}