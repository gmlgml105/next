// "https://jsonplaceholder.typicode.com/photos"에서 데이터를 패칭하고
// 20개만 잘라서 화면에 이미지 태그를 활용해서 
// 카카오 프렌즈샵처럼 좌우 배치로 10행 2열 출력하기
// ex) Image태그 title

// 1. fetching 함수는 컴포넌트 "밖"에서 선언

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { use } from "react"

export interface Imgs {
    albumId: number;
    id:     number;
    title:  string;
    body:   string;
}

const getImage = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    if(!response.ok) {
        throw new Error("Fetching failed") // raise === throw
    }
    const datas = await response.json()
    return datas 
}

const imgPromise = getImage()

export default function ImageRead() {
    const imgs = use<Imgs[]>(imgPromise)
    const imgList = imgs.slice(0, 10).map((img: Imgs, i) => (
        // 페이지를 이동할 때는 a가 아닌 Link 태그를 사용해야 한다!!
        <li className="flex">
            <Image className="mr-3"
            key={img.id} 
            alt="이미지 제목"
            src={`https://picsum.photos/seed/${img.id}/600`} 
            width={150}
            height={150}
            />
            <p>{img.title}</p>
        </li>
    ))

    return (
        <ul className="grid grid-cols-2 gap-2">
            {imgList}
        </ul>
    );
}