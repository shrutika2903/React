import React, {useState, useEffect} from "react";

function useEffectComponent() {
    const [value, setValue] = useState(1);

    useEffect(() => {
        window.setInterval(() => {
            setValue((v) => v + 1);
            
        }, 1000);
    }, []);

    return <div>
        {value}
    </div>
}

export default useEffectComponent;