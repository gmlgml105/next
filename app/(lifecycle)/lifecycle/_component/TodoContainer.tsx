// 2. 다이나믹 라우트를 활용해서 데이터를 fetch하기

// https://jsonplaceholder.typicode.com/todos
"use client"

import ErrorComponent from "@/components/common/ErrorCompo"
import Loading from "@/components/common/Loading"
import { useQuery } from "@tanstack/react-query"
import TodoQuery from "./TodoQuery"

export interface Todo {
    userId:    number;
    id:        number;
    title:     string;
    completed: boolean;
}

// 1. fetching 함수는 컴포넌트 "밖"에서 선언
const getTodos = async (): Promise<Todo[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    if(!response.ok) {
        throw new Error("Fetching failed")
    }
    const datas = await response.json()
    return datas
}

// 2. 리액트 쿼리는 컴포넌트 "안"에서 호출
export default function TodoQueryContainer() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["todos"],
        queryFn: getTodos,
    })

    if(isLoading) return <Loading />
    if(error) return <ErrorComponent />

    const todoList = data?.map((todo: Todo) => (
        <TodoQuery key={todo.id} todo={todo} />
    ))

    return (
        <>
            <p>투두 목록</p>
            <ul>{todoList}</ul>
        </>
    );
}