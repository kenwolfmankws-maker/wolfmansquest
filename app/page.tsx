export default function Page() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        background: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "600px",
          padding: "40px",
          backgroundImage: "url('https://i.imgur.com/6Y6zP3b.png')",
          backgroundSize: "cover",
          borderRadius: "12px",
          color: "#3b1f00",
          fontFamily: "Georgia, serif",
          fontSize: "22px",
          lineHeight: "1.5",
          textAlign: "center",
        }}
      >
        Welcome, traveler.
        <br />
        <br />
        You have reached the outer gate of
        <br />
        <strong>Wolfman's Sanctuary</strong>.
        <br />
        <br />
        The grounds beyond are still being prepared,
        <br />
        and the gatekeeper has not yet taken his post.
        <br />
        <br />
        When the Sanctuary is ready,
        <br />
        the bell rope will hang here,
        <br />
        and Eldon will answer those who call.
        <br />
        <br />
        Until then, the gate remains closed.
        <br />
        <br />
        Please return another time.
      </div>
    </main>
  );
}
