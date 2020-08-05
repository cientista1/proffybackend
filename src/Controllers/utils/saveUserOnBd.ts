
export default async function SaveUserOnBd(name:String, avatar:String, whatsapp: String , bio:string,db: any){
  const insertedUsersIds =  await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio,
  });
  return insertedUsersIds[0]; 
}