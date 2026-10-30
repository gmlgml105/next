// https://jsonplaceholder.typicode.com/todos
// ※ 권장
"use client"

import ErrorComponent from "@/components/common/ErrorCompo"
import Loading from "@/components/common/Loading"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link";

export interface Todo {
    userId:    number;
    id:        number;
    title:     string;
    completed: boolean;
}

// 1. fetching 함수는 컴포넌트 "밖"에서 선언
const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    if(!response.ok) {
        throw new Error("Fetching failed") // raise === throw
    }
    const datas = await response.json()
    return datas 
}

// 2. 리액트 쿼리는 컴포넌트 "안"에서 호출
export default function TodoQueryContainer() {
    // useQuery: 데이터를 불러오는 리액트 쿼리 훅함수
    const {data, isLoading, error} = useQuery({
        queryKey: ["todos"], // refetching key
        queryFn: getTodos, // fetch function
    })

    // TodoQuery.tsx 컴포넌트를 만들고 컴포넌트로 분리하기
    // 옵셔널 체이닝 ?.: 마운트시 빈배열 또는 데이터 접근이 안되서 생기는 오류를 안전하게 접근하도록 처리
    const todoList = data?.map((todo: Todo, i: number) => (
        <li key={i}>{todo.title}</li>
    ))

    if(isLoading) return <Loading />
    if(error) return <ErrorComponent />

    return (
        <>
            <p>투두 목록</p>
            <h2>{data?.title}</h2>
            <p>번호: {data?.id}</p>
            <p>작성자: {data?.userId}</p>
            <p>상태: {data?.completed ? "완료" : "미완료"}</p>

            <Link href="/lifecycle">← 목록으로</Link>
        </>
    );
}