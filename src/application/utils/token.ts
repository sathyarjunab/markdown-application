import jwt from "jsonwebtoken";

export const JwtTokenGenrator = (payLoad: string) => {
  if (process.env.SECRETE) {
    const token = jwt.sign(payLoad, process.env.SECRETE, {
      algorithm: "HS256",
    });
    return token;
  }
};

export const JwtTokenVerify = (token: string | undefined) => {
  if (!process.env.SECRETE || !token) {
    return;
  }
  const payLoad = jwt.verify(token, process.env.SECRETE);
  return payLoad;
};
