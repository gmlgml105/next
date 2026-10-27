import HongComponent from "./_component/HongComponent";
import SHComponent from "./_component/SHComponent";

// 컴포넌트 분리
// 1. 컴포넌트는 반드시 닫는 태그가 존재해야 한다.
// 2. 앞글자가 대문자로 시작한다.
// 3. Atomic Design Pattern은  _component, _fuction, 같이 공용 함수 및 컴포넌트를 분리한다!
// tsx04에서 사용되는 공용 함수 및 컴포넌트를 분리한다.

export default function page() {
    return (
        <>
            <HongComponent />
            <SHComponent />
        </>
    );
}