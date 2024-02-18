import { StateType, editorUIActions, editorUIData } from "../data"

export const useConsumer = (selector: string) => { 

}

export const useProvider = (selector: string) => { 
    return [(newState: any) => {}]
}

export const useState: (StateType) => [StateType, (StateType) => void] = (initState: StateType) => {
    editorUIData.dispatch(editorUIActions.state.useState(initState))
    let id = editorUIData.getState().state.data.length - 1;
    let val = editorUIData.getState().state.data[id];
    return [
        val, 
        (newState: StateType) => editorUIData.dispatch(editorUIActions.state.setState({id: id, val: newState}))
    ]
}

export const useLocation: () => [Location, (string) => void] = () => {
    const [location, setLocation] = useState(window.location.toString())
    return [window.location, (newLoc: string) => {
        console.log("[HOK] Location", newLoc);
        window.location.href = newLoc;
        setLocation(newLoc);
    }]
}