import { useRef } from "react";

function useRefComponent() {
const inputRef = useRef<HTMLInputElement | null>(null);

return <input ref={inputRef}></input>
}

export default useRefComponent;