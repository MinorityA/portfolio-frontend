import nextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { options } from "./options";

const handler = nextAuth(options)

export { handler as GET, handler as POST}