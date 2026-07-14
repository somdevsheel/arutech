import { createHmac } from "crypto";
import { cookies } from "next/headers";

const SECRET = process.env.ADMIN_SECRET || "arutech-admin-secret";
const COOKIE = "arutech_admin";

export function generateToken(password: string): string {
  return createHmac("sha256", SECRET).update(password).digest("hex");
}

export function verifyToken(token: string): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  const expected = generateToken(password);
  return token === expected;
}

export async function getAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE)?.value;
  if (!token) return false;
  return verifyToken(token);
}

export const ADMIN_COOKIE = COOKIE;
