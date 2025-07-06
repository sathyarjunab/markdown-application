// types/express.d.ts or src/types/express.d.ts

import { JwtPayload } from "jsonwebtoken";

declare namespace Express {
  export interface Request {
    user?: string | JwtPayload; // or a custom User type/interface
  }
}
