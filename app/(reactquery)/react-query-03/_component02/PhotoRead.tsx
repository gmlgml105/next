"use client"

import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/common/Loading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Photo } from "../image02/PhotoContainer";
import ErrorCompo from "@/components/common/ErrorCompo";

interface PhotoReadProps {
    id: string;
}

const getPhoto = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const photo = await response.json()
    return photo
}

export default function PhotoRead({id}: PhotoReadProps) {

    const {data: photo, isLoading, error} = useQuery<Photo>({
        queryFn: () => getPhoto(id),
        queryKey: ["photo", id],
    })
    const router = useRouter()

    if(isLoading) return <Loading />
    if(error) return <ErrorCompo />

    return (
        <>
            <button 
                className="w-50 h-10 bg-blue-500 text-white rounded-2xl cursor-pointer"
                onClick={() => router.push("/react-query-02")}
            >뒤로가기</button>
            <p>{photo?.id}번 제목: {photo?.title}</p>
            <Image 
                className="bg-gray-100"
                src={photo?.url!}
                alt="이미지"
                width={600}
                height={600}
            />
        </>
    );
}