import { useQuery } from "@tanstack/react-query"
import { Todo } from "@/app/(reactquery)/react-query-02/_component/TodoQueryContainer02"

interface TodoReadProps {
    id : string
}

const getTodobyId = async (id : string) => {
    const response = await fetch (`https://jsonplaceholder.typicode.com/todos/${id}`)
    if(!response.ok) {
        throw new Error("fetching failed")
    }
    return await response.json()
}

export default function Todoread({id} : TodoReadProps) {
    console.log("read id", id)
    const {data, error, isLoading, refetch} = useQuery({
        queryFn: () => getTodobyId(id),
        queryKey: ["todo"]
    })
    const {title, completed, userId}: Todo  = data
    return (
        <>
            <h1>{id}번 게시글 : {title}</h1>
            <p>{completed? "할일 완료" : "미완료"}</p>
            <p>유저 : {userId}</p>
        </>
    );
}