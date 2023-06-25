
import { getServerSession } from "next-auth";
import Button from '../components/Button';
import { User } from "../components/User";
import authOptions from "../lib/auth";
async function Home() {

  const session = await getServerSession(authOptions)




  return (
    <div>
      <h1>This is Home page</h1>
      <p>Server side rendaring</p>
      <pre>{JSON.stringify(session)}</pre>
      <User />
      <Button />
    </div>
  )
}

export default Home;