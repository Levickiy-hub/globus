
function Footers() {
    const date = new Date();

    const year = date.getFullYear();
    return (
        <footer style={{ borderTop: "1px solid #ccc", padding: "20px", marginTop: "40px", textAlign: "center", color: "#444" }}>
            <p>ул. Козлова, Минск</p>
            <p>Email: info@globus.by</p>
            <p>© РУП БТО Глобус - {year}</p>
        </footer>
    )
}

export default Footers
