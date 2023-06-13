import { User } from "@/lib/model";
import { signJwtAccessToken } from "@/lib/jwt";
import * as bcrypt from "bcrypt";
import { connectToDatabase } from "@/lib/database/connection";

interface RequestBody {
  email: string;
  password: string;
}
export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  await connectToDatabase()
  const user = await User.findOne({
      email: body.email,
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password,_id, ...userWithoutPass } = user.toObject();
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}
