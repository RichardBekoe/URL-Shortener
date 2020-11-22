import mongoose from "mongoose"
// import shortId from "shortid"


import { customAlphabet } from 'nanoid'

let nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 8)

const UrlSchema = new mongoose.Schema({
  fullUrl: {
    type: String,
    required: true
  },
  shortUrlCode: {
    type: String,
    required: true,
    // default: shortId.generate

    default: () => nanoid()
  }

})

const UrlModel = mongoose.model('ShortUrl', UrlSchema)

export default UrlModel
