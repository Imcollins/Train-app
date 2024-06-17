import jwt from "jsonwebtoken";

const secretKey = "shrudex-key";

const decodeToken = (token) => {
  try {
    
    const decoded = jwt.verify(token, secretKey);

    // The decoded object should contain user information.
    return decoded;
  } catch (error) {
    // If there's an error, the token is invalid or has expired.
    // You can handle this error as needed.
    console.error("Token decoding error:", error);
    return null; // or throw an error
  }
};

export default decodeToken;