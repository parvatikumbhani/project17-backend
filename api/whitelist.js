export default function handler(req, res) {
  const userId = req.query.userId;

  if (!userId) {
    return res.status(400).json({
      whitelisted: false,
      message: "No userId provided."
    });
  }

  const whitelist = [
    "123456789",
    "987654321",
    "555555555"
  ];

  if (whitelist.includes(userId)) {
    return res.status(200).json({
      whitelisted: true,
      message: "User is whitelisted."
    });
  }

  return res.status(200).json({
    whitelisted: false,
    message: "User not whitelisted."
  });
}