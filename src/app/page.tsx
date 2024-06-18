export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to bottom left, #3B82F6, #7C3AED, #3B82F6)',
        color: 'white', 
        textAlign: 'center' 
      }}
    >
      <h2 style={{ fontSize: '3rem', fontFamily: 'Arial, sans-serif' }}>
        Registros de quadras Esportivas
      </h2>
      <br />
      <p>By Lucas Friedrich and Leonardo Salinet</p>
    </div>
  );
}

