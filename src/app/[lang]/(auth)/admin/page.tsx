import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
const Admin = async () => {
  const session = await getServerSession()
  console.log(session)
  if (session === null) {
    redirect('/')
  }
  return (
    <div>page</div>
  )
}

export default Admin
