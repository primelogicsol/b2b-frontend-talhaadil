import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

export default function handler(req:any, res:any) {
  // You can grab any query params from req.query if you want
  const { code, state } = req.query;

  // Create a fake payload for testing
  const payload = {
    id: "123456",
    email: "test@example.com",
    name: "Test User",
    code,
    state
  };

  // Sign the JWT
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

  res.status(200).json({ token, payload });
}
