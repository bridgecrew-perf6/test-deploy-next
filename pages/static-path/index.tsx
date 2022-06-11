import { useRouter } from "next/router"

function UserListComponent() {
    const router = useRouter();

    return <div>
        <h2>List user</h2>
        <ul>
            <li onClick={() => router.push('/user/1')}>
                User 1
            </li>
            <li onClick={() => router.push('/user/2')}>
                User 2
            </li>
        </ul>
    </div>
}
export default UserListComponent
