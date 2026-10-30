import Image from "next/image";
import catSrc from "@/public/assets/images/react-query-03/cat.jpg"
export default function page() {
    return (
        <>
        {/* resource 의 "/" 경로는 public 경로를 의미함! */}
        <Image 
        src={"/assets/images/react-query-03/cat.jpg"}
        alt="애옹"
        width={600}
        height={300}
        priority>
        </Image>

        <Image 
        src={"/assets/images/react-query-03/cat.jpg"}
        alt="애옹"
        width={300}
        height={200}
        className="bg-gray-300">
        </Image>

        <Image 
        src={catSrc}
        alt="애옹"
        placeholder="blur"
        >
        </Image>
        </>
    );
}



