import type Snabbdom from "@herp-inc/snabbdom-jsx";
import { editorUIData } from "./data";
import { DIV, SPAN } from "./util/HTMLElement";
// import Alert from "./util/alert";
import { useConsumer, useLocation, useProvider } from "./util/useHook";
import { Div, Span } from "./util/Element";


export const ErrorHandlerPage: Snabbdom.Component<any> = (props: any) => {
    const [location, setLocation] = useLocation()
    setTimeout(() => {
        setLocation(editorUIData.getState().mode.root)
    }, 1000);
    return <>
        <Div className="w-full h-full"
            $style={{
                backgroundColor: "black",
                color: "red"
            }}
        >
            <Div className="flex flex-row"
                $style={{
                    height: "100%",
                    position: "relative",
                    top: "50%",
                }}
            >
                <Span className="horiz-center">Oops! Something went wrong.</Span>
                <Span className="horiz-center">Jump to HomePage in 1 second.</Span>
            </Div>
        </Div>
    </>
}