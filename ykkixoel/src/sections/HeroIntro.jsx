function HeroIntro() {
  const scrollToNext = () => {
    document.getElementById("gallery").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <h1>
        Hey you <span>💖</span>
      </h1>

      <p>
        I made this because you’re kinda my favorite person.
      </p>

      <button onClick={scrollToNext}>
        Okay show me 😌
      </button>
    </section>
  );
}

export default HeroIntro;
