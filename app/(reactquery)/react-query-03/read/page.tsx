export const instant = false

import { Suspense } from "react";
import ImageRead from "./_component/ImageRead";

export default function Page() {
    return (
        <Suspense fallback={<div>로딩 중...</div>}>
            <ImageRead />
        </Suspense>
    );
}
