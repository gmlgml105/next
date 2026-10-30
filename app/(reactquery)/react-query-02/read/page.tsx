export const instant = false

import { Suspense } from "react";
import TodoRead from "../_component/read/_component/TodoRead";

export default function Page() {
    return (
        <Suspense fallback={<div>로딩 중...</div>}>
            <TodoRead />
        </Suspense>
    );
}
