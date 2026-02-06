export default function handler(req, res) {
  const key = req.query.key;

  if (!key) {
    return res.status(400).json({
      valid: false,
      message: "No key provided."
    });
  }

  const validKeys = [
    "PROJECT17-ALPHA",
    "PROJECT17-BETA",
    "PROJECT17-OWNER"
  ];

  if (validKeys.includes(key)) {
    return res.status(200).json({
      valid: true,
      message: "Key is valid."
    });
  }

  return res.status(200).json({
    valid: false,
    message: "Invalid key."
  });
}
