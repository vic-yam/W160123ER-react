import Loops from "./Loops";
import OnClick from "./events/Onclick";
import MuiSandbox from "./mui-sandbox/MuiSandbox";
import FatherPropsObject from "./props/props-object/FatherPropsObject";
import FatherPropsString from "./props/props-string/FatherPropsString";
import FatherPropsTwoKeys from "./props/props-two-keys/FatherPropsTwoKeys";

const handleClick = (text) => {
    console.log(text)
};

const Sandbox = () => (
    <>
        {/* <MuiSandbox /> */}
        {/* <FatherPropsString></FatherPropsString> */}
        {/* <FatherPropsObject></FatherPropsObject> */}
        {/* <FatherPropsTwoKeys></FatherPropsTwoKeys> */}
        {/* <Loops></Loops> */}
        <OnClick handleClick={handleClick}></OnClick>
        <OnClick handleClick={handleClick}></OnClick>
        <OnClick handleClick={handleClick}></OnClick>
        <OnClick handleClick={handleClick}></OnClick>
    </>
)

export default Sandbox;