// https://jsonplaceholder.typicode.com/todos/{id}
// 다이나믹 라우트의 id를 받아서 할 일 하나만 fetch하기
"use client"

import ErrorComponent from "@/components/common/ErrorCompo"
import Loading from "@/components/common/Loading"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import Link from "next/link"
import type { Todo } from "../../_component/TodoContainer"

// 1. fetching 함수는 컴포넌트 "밖"에서 선언 (id를 받아서 주소에 넣기)
const getTodo = async (id: string): Promise<Todo> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if(!response.ok) {
        throw new Error("Fetching failed")
    }
    const data = await response.json()
    return data
}

// 2. 리액트 쿼리는 컴포넌트 "안"에서 호출
export default function TodoDetailPage() {
    // 주소의 [id] 자리에 있는 값 꺼내기 (/lifecycle/side-effect/3 → "3")
    const { id } = useParams<{ id: string }>()

    const { data, isLoading, error } = useQuery({
        queryKey: ["todo", id],     // id마다 따로 저장
        queryFn: () => getTodo(id), // id를 넘겨야 해서 화살표 함수로 감싸기
    })

    if(isLoading) return <Loading />
    if(error) return <ErrorComponent />

    return (
        <>
            <p>할 일 상세</p>
            <h2>{data?.title}</h2>
            <p>번호: {data?.id}</p>
            <p>작성자: {data?.userId}</p>
            <p>상태: {data?.completed ? "완료" : "미완료"}</p>

            <Link href="/lifecycle">← 목록으로</Link>
        </>
    )
}