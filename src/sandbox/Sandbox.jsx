import Loops from "./Loops";
import OnClick from "./events/Onclick";
import MuiSandbox from "./mui-sandbox/MuiSandbox";
import FatherPropsObject from "./props/props-object/FatherPropsObject";
import FatherPropsString from "./props/props-string/FatherPropsString";
import FatherPropsTwoKeys from "./props/props-two-keys/FatherPropsTwoKeys";



const handleClick = () =>  {  
    let count = 0;
    const inner = (e) => {
        count++;
        // console.log(e);
        console.log(count);
    }
    return inner;
};

const inner = handleClick();


const Sandbox = () => (
    <>
        <OnClick handleClick={inner}></OnClick>
        <OnClick handleClick={inner}></OnClick>
        <OnClick handleClick={inner}></OnClick>
        <OnClick handleClick={inner}></OnClick>
        {/* <MuiSandbox /> */}
        {/* <FatherPropsString></FatherPropsString> */}
        {/* <FatherPropsObject></FatherPropsObject> */}
        {/* <FatherPropsTwoKeys></FatherPropsTwoKeys> */}
        {/* <Loops></Loops> */}
    </>
)

export default Sandbox;