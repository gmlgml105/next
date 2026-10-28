import { cn } from "cn";
import { STYLE_03_CLASSES } from "../style03/style-03.style";

export default function page() {
    return (
        <>
            {/* <p className={`animate-wiggle ${STYLES.a}`}>사용자 정의 애니메이션</p> */}
            <p className={cn("animate-wiggle", STYLE_03_CLASSES.a)}>사용자 정의 애니메이션</p>
        </>
    );
}