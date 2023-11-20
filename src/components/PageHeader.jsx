

const PageHeader = () => {
    const data = {
        title: 'Page Header',
        description: 'This is a page header component',
    };
    console.log(data);

    const headLineStyle = {
        color: 'red',
        fontFamily: 'Roboto, sans-serif'
    }

    return (
        <>
            <h1 style={headLineStyle}>title</h1>
            <p style={{color: 'green', marginTop:'5px'}}>{data.title}</p>
            <h2>description</h2>
            <p>{data.description}</p>
        </>
    );
}

export default PageHeader;