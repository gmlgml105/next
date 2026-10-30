import Link from "next/link"
import type { Todo } from "./TodoQueryContainer"

export default function TodoQuery({ todo }: { todo: Todo }) {
    return (
        <li>
            {/* 클릭하면 /lifecycle/side-effect/1 처럼 id가 들어간 주소로 이동 */}
            <Link href={`/lifecycle/side-effect/${todo.id}`}>
                {todo.title}
            </Link>
        </li>
    )
}