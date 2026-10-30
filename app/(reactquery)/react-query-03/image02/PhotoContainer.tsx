"use client"
// import 사항들
import ErrorCompo from "@/components/common/ErrorCompo";
import Loading from "@/components/common/Loading"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image";
import { useRouter } from "next/navigation";

// type interface를 객체로 선언
export interface Photo {
    albumId:      number;
    id:           number;
    title:        string;
    url:          string;
    thumbnailUrl: string;
}

// 비동기 / 동기 코드 fetching
const getPhotos = async ():Promise<Photo[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    if(!response.ok) {
        throw new Error("getPhotos fetching failed")
    }
    const datas = await response.json()
    return datas
}

// 어떤 타입인지 선택하고 변수 선언 객체 넣기
export default function PhotoContainer() {

    const {data, isLoading, error} = useQuery<Photo[]>({
        queryFn: getPhotos,
        queryKey: ["photos"]
    })

    const router = useRouter()
    // router.push("경로"): 이전 경로를 기억
    // router.replace("경로"): 이전 경로 기억하지 않음

    // 반복으로 돌리기
    const photos: Photo[] | undefined = data?.slice(0, 20)
    const photoList = photos?.map(({id, title, url}: Photo) => (
        // li 태그는 따로 빼내기
        <li 
            key={id} className="flex items-center gap-1 cursor-pointer"
            onClick={() => {router.push(`/react-query-02/${id}`)}}
        >
            <Image 
                className="bg-gray-100"
                src={url}
                alt="프로필 이미지"
                width={50}
                height={50}
            />
            <p>{title}</p>
        </li>
    ))
    

    if(isLoading) return <Loading />
    if(error) return <ErrorCompo />

    return (
        <>
            <h1>사진 리스트</h1>
            <ul>{photoList}</ul>
        </>
    );
}