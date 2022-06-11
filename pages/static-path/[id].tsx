import { useRouter } from "next/router"


function UserDetail({post}: any) {
    const router: any = useRouter();
    console.log('123:', post);
    
    return <div>
        <h2>
            User detail {router.query.id}
        </h2>
        <div>
            detail: {post.Id}
        </div>
        <div>
            <img src={post.Avatar} alt="" width={250}/>
        </div>
        <div>
            {post.Title}
        </div>

        <button onClick={() => router.push('/user')}>Go to list</button>
    </div>
}


export async function getStaticPaths() {
    const res = await fetch(`https://hhq.somee.com/api/News?offSet=0&pageSize=5`);
    const paths: any = (await res.json()).Data.Data.map((item: any) => ({params: {id: item.Id}}));
    return {
      paths,
      fallback: true
    }
}

export async function getStaticProps({params}: any) {
    const post = await (await fetch(`https://hhq.somee.com/api/News/${params.id}`)).json();
    return {
        props: {
            post: post.Data
        },
        revalidate: 1
    }
}

export default UserDetail