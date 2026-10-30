// UserContainer에서 한 번에 들고 오기!!

export const instance = false

import { Suspense } from "react";
import UserContainer from "./_component/UserContainer";
import Loading from "@/components/common/Loading";

export default function page() {
    return (
        <Suspense fallback={<Loading />}>
            <UserContainer />
        </Suspense>
    );
}