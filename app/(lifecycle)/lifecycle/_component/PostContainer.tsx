// "https://jsonplaceholder.typicode.com/users"
// 데이터를 fetching하고, 각각 유저 데이터를 컴포넌트로 분리하여 화면에 이름만 출력하기
"use client"

import { Suspense, use, useEffect, useState } from "react";
import User from "./Users";
import Loading from "@/components/common/Loading";
import Link from "next/link";

export interface Post {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

const getDatas = async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const datas: Post[] = await response.json()
    return datas
}   
const postPromise = getDatas()

export default function PostContainer() {
    const posts = use<Post[]>(postPromise)
    const postList = posts.map((post: Post, i) => (
        // 페이지를 이동할 때는 a가 아닌 Link 태그를 사용해야 한다!!
        <Link key={i} href={`/lifecycle/side-effect/${post.id}`}>{post.title}</Link>
    ))

    return (
        <Suspense fallback={<Loading />}>
            <ul>{postList}</ul>
        </Suspense>
    );
}