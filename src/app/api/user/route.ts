import { User } from "@/lib/model";
import * as bcrypt from "bcrypt";
import { connectToDatabase } from "@/lib/database/connection";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
    await connectToDatabase()
  const user = await User.create({
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
  });

  const { password, ...result } = user.toObject();
  console.log(result)
  return new Response(JSON.stringify(user));
}
