// 테일윈드 스타일 넣기 !!
export default function page() {
    return (
        <>
            <p className="text-fuchsia-800 active:text-pink-700">tailwind 컬러 사용</p>
            <p className="text-amber-800 active: bg-orange-700">기본 폰트 컬러 사용</p>
            <p className="text-amber-500">기본 서브 폰트 컬러 사용</p>
        </>
    );
}