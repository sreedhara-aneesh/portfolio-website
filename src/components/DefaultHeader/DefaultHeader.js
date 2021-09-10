const DefaultHeader = ({ title, subtitle }) => {

    const style = {
        wrapper: {
            padding: "6em 1em",
            textAlign: "center"
        }
    }

    return (
        <div style={style.wrapper}>
            <h1>{title}</h1>
            <h6>{subtitle}</h6>
        </div>
    );

}

export default DefaultHeader;