// hover : 마우스를 올렸을 때
// 버튼이 눌리면 배경 컬러를 그린, 글자 색을 흰색으로 변경
// 스타일 분리
import { STYLE_03_CLASSES } from "./style-03.style";

export default function page() {
    return (
        <>
            <a href ="#" className={STYLE_03_CLASSES.a}> Hover 시 스타일 변경!😉</a>
            <button className={STYLE_03_CLASSES.button}>버튼 눌림 !</button>        
        </>
    );
}