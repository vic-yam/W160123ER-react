import ChildPropTypes from "./ChildPropTypes";

const FatherPropTypes = () => {

    const exactObject = {
        key: "hello",
        second: 5,
        third: true
    };


    const image = {
        src: "https://picsum.photos/200/300",
        alt: "random image",
        width: 200,
    }

    return (
        <div>
            <h1>Father</h1>
            <ChildPropTypes 
                string="Hello World!"
                number={1}
                boolean={true}
                object={{key: "value"}}
                array={[1,2,3]}
                func={(e) => console.log(e)}
                arrayOfObjects={[
                    {name: "vic"},
                    {name: "joe"},
                    {name: "jane"}
                ]}
                id={1}
                specificId={1}
                exactObject={exactObject}
                image={image}
                name="Vic"
            />
            <ChildPropTypes 
                string="Hello World!"
                number={1}
                boolean={true}
                object={{key: "value"}}
                array={[1,2,3]}
                func={(e) => console.log(e)}
                arrayOfObjects={[
                    {name: "vic"},
                    {name: "joe"},
                    {name: "jane"}
                ]}
                id="asd"
                specificId="asd"
                exactObject={exactObject}
                image={image}
            />
        </div>
    );
}

export default FatherPropTypes;