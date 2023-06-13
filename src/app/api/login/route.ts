import { User } from "@/lib/model";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
}
export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await User.findOne({
      email: body.email,
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password,_id, ...userWithoutPass } = user.toObject();
    
    return new Response(JSON.stringify(userWithoutPass));
  } else return new Response(JSON.stringify(null));
}
