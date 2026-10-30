"use client"

import ErrorComponent from "@/components/common/ErrorCompo";
import Loading from "@/components/common/Loading";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import type { Todo } from "@/app/(reactquery)/react-query-02/_component/TodoQueryContainer02";

// 1. fetching 함수는 컴포넌트 "밖"에서 선언 (id를 받아서 주소에 넣기)
const getTodoById = async (id : string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if(!response.ok) {
        throw new Error("getTodoById fetching failed")
    }
    const datas = await response.json()
    return datas
}

// 데이터 fetching 코드 완성하기
// 투두가 완성상태라면 게시글 제목의 색깔을 green으로 지정하기
export default function TodoRead() {
    // useSearchParams: 리액트의 쿼리스트링을 가져오는 훅함수
    // .get(key): /read?id=1 → "1" (없으면 null)
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    // 2. 리액트 쿼리는 컴포넌트 "안"에서 호출
    const { data, isLoading, error } = useQuery({
        queryKey: ["todo", id],      // id마다 따로 저장
        queryFn: () => getTodoById(id!), // id를 넘겨야 해서 화살표 함수로 감싸기
        enabled: !!id,               // id가 있을 때만 요청
    })

    if(!id) return <p>id가 없어요. 주소 뒤에 ?id=1 을 붙여주세요.</p>
    if(isLoading) return <Loading />
    if(error) return <ErrorComponent />
    if(!data) return null

    return (
        <>
            {/* 완료 상태면 초록색, 아니면 기본 색 */}
            <h1 className={data?.completed ? "text-green-500" : "text-blue-500"}></h1>
            <p>{data.completed ? "할일 완료" : "미완료"}</p>
            <p>유저 : {data.userId}</p>
        </>
    );
}