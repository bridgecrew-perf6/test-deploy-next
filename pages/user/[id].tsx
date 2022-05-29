import { useRouter } from "next/router"


function UserDetail() {
    const router: any = useRouter();
    return <div>
        <h2>
            User detail {router.query.id}
        </h2>
        <button onClick={() => router.push('/user')}>Go to list</button>
    </div>
}

export default UserDetail