import express, {Response , Request} from 'express';
import db from '../database/connection';
import SaveUserOnBd from './utils/saveUserOnBd';

export default {
  async store(request: Request, response: Response){
    const {
      name,
      avatar,
      whatsapp,
      bio,
    } = request.body;
   
   const result = await SaveUserOnBd(name, avatar, whatsapp, bio , db);
   return response.json(result);   
  } 
}