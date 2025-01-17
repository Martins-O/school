// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };