import { auth } from "@/auth"

export async function authorize() {
    const session = await auth()
    const isAuthorized = session && session.user?.email === process.env.AUTHORIZE_MAIL
    
    return {
        isAuthorized,
        session: isAuthorized ? session : null
    } 
}