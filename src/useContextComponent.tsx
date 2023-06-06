import React, {useContext, useState} from "react";
import UserContext, {UserState} from "./store";


function ConsumerComponent() {
    const user = useContext<UserState>(UserContext);

    return(
        <div>
            <div>
                First: {user.first}
            </div>
            <div>Last: {user.last}</div>
        </div>
    )
}
function useContextComponent() {
    const [user, setUser] = useState<UserState>({
        first: 'abc',
        last: 'xyz'
    })
    return (
        <UserContext.Provider value={user}>
<ConsumerComponent/>
<button onClick={() => setUser({
    first: "James",
    last: "Smith"
})}>
    Change Context
</button>
        </UserContext.Provider>
    )
}

export default useContextComponent;