import gremlinIcon from "/src/assets/gremlin.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={gremlinIcon} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}