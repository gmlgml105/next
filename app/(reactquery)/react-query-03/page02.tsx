export const instant = false

import { Suspense } from "react";
import PhotoRead from "./_component02/PhotoRead";

export default function page02() {
    return (
           <Suspense fallback={<div>로딩 중...</div>}>
               <PhotoRead />
           </Suspense>
       );
}