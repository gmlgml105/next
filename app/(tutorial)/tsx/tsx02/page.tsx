// tsx의 연산
// 1. tsx에는 if문이 없다

export default function Page() {

    const getName = (name: any) => name || "홍길동"
    const login = true

    // 만약 사용자가 로그인이라면 회원의 이름을 화면에 태그로 출력하고, 
    // 만약 로그인이 아니라면 비회원입니다.를 출력
    // Fragment는 DOM을 하나로 묶기 위한 태그로 화면에 랜더링 되지 않는다. (단순 화면에 묶기 위함!)

    return (
        // 여기서는 tsx 문법이기에 if문을 못 씀!! 
        // 밖에서는 가능 !
        <>
            {login ? (
                    <>
                        <p>{getName("장보고")}님 환영합니다.</p>
                    </>
            ):(
                    <>
                        <p>비회원님 환영합니다.</p>
                    </>
            )}
        </>
    )}