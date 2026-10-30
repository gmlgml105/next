import { Suspense } from "react";
import Loading from "@/components/common/Loading";
import TodoRead from "../../read/_component/TodoRead";


export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <TodoRead />
        </Suspense>
    );
}