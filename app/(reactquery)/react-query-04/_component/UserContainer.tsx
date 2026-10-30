// https://jsonplaceholder.typicode.com/users
// user 데이터 전체를 fetching하여 유저의 이름만 화면에 목록으로 출력

"use client"

import ErrorCompo from "@/components/common/ErrorCompo";
import Loading from "@/components/common/Loading";
import { useQuery } from "@tanstack/react-query";

// type interface를 객체로 선언
export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

// 비동기 / 동기 코드 fetching
const getUsers = async ():Promise<User[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok) {
        throw new Error("getUsers fetching failed")
    }
    const datas = await response.json()
    return datas
}

// 어떤 타입인지 선택하고 변수 선언 객체 넣기
export default function UserContainer() {

    const {data, isLoading, error} = useQuery<User[]>({
        queryFn: getUsers,
        queryKey: ["users"]
    })

    // 반복으로 돌리기
    const users: User[] | undefined = data?.slice(0, 20)
    const userList = users?.map(({id, username}: User) => (
        // li 태그는 따로 빼내기
        <li key={id}>
        <p>{username}</p>
        </li>
    ))

    if(isLoading) return <Loading />
    if(error) return <ErrorCompo />

    return (
        <>
            <h1>사용자 이름 리스트</h1>
            <ul>{userList}</ul>
        </>
    );
}