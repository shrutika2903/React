import React, {useState} from "react";

function useStateComponent() {
    const [array, setArray] = useState<number[]>([]);
    const [name, setName] = useState<string>(" ");

    return(
        <div>
            <div>
                <button onClick={() =>setArray([...array, array.length + 1])}>
                    Add to array
                </button>
                {JSON.stringify(array)}
            </div>
            <div>
                <button onClick={() =>setName("Shrutika")}>Set Name</button>
                {JSON.stringify(name)}
            </div>
        </div>
    )



}

export default useStateComponent;