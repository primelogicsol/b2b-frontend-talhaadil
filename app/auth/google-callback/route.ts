import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

export default function handler(req:any, res:any) {
  // You can grab any query params from req.query if you want
  const { code, state } = req.query;
  console.log(code,state)


  // Sign the JWT
  

  res.status(200).json();
}
