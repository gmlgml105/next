// https://jsonplaceholder.typicode.com/todos/{id}
// 다이나믹 라우트의 id를 받아서 할 일 하나만 fetch하기
"use client"

import ErrorComponent from "@/components/common/ErrorCompo"
import Loading from "@/components/common/Loading"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Todo } from "@/app/(reactquery)/react-query-02/page"

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

    // 해야할 일들 상세 todo 목록
    // data 뒤에 '?'를 붙이는 이유 : 비어 있는 순간이 있을 수도 있음
    // ? (옵셔널 체이닝) : 비어 있을 때 아무것도 안 나오게 하려고 붙이는 메서드
    // 라이프 사이클이 무조건 한 번은 mount 됨. 
    // 비동기 코드가 들어가면 두 번 랜더링이 됨.
    // 데이터가 처음에 빈 객체면 오류가 날 가능성이 큼. (이를 방지하기 위해)

    // li 태그로 반복 돌려도 됨 !!
    return (
        <>
            <p>할 일 상세</p>
            <h2>{data?.title}</h2>
            <p>번호: {data?.id}</p>
            <p>작성자: {data?.userId}</p>
            <p>상태: {data?.completed ? "완료" : "미완료"}</p>

            <Link href="/react-query-02">← 목록으로</Link>
        </>
    )
}