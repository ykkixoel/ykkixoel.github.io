import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [step, setStep] = useState(0);
  const [daysTogether, setDaysTogether] = useState(0);

  // Set your anniversary here (Year, Month Index 0-11, Day)
  const startDate = new Date(2026, 0, 14);

  const FloatingHearts = () => {
    const hearts = Array.from({ length: 15 }); // Number of hearts
    return (
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {hearts.map((_, i) => (
          <div
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: '0', // Anchor to top so translateY handles the movement relative to the screen
              animationDuration: `${Math.random() * 3 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
              opacity: 0, // Start invisible
              animationFillMode: 'both'
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const today = new Date();
    const diff = today - startDate;
    setDaysTogether(Math.floor(diff / (1000 * 60 * 60 * 24)));
  }, []);

  const nextStep = () => {
    if (step < sections.length - 1) {
      setStep(step + 1);
    }
  };

  const sections = [
    // 1. Hey there
    <div key="0" className="fade-in" style={styles.content}>
      <h1 style={styles.title}>Hiii, 👋</h1>
      <p style={styles.subtitle}>You are my fav person in the whole world.</p>
      <p style={styles.tapHint}>[ Tap anywhere to continue ]</p>
    </div>,

    // 2. Days together
    <div key="1" className="fade-in" style={styles.content}>
      <p>We have been together for</p>
      <div style={styles.daysCount}>{daysTogether}</div>
      <p>days hehe</p>
    </div>,

    // 3. First met
    <div key="2" className="fade-in" style={styles.content}>
      <h3 style={styles.heading}>first pic of us...</h3>
      <div style={styles.photoFrame}>
        <img
          src={new URL('./assets/first.jpg', import.meta.url).href}
          alt="Our first meeting"
          style={styles.image}
        />
      </div>
      <p style={styles.caption}>I know we've been together for only a short while</p>
    </div>,

    <div key="3" className="fade-in" style={styles.content}>
      <h3 style={styles.heading}>my favourite pic so far</h3>
      <div style={styles.photoFrame}>
        <img
          src={new URL('./assets/fav2.jpg', import.meta.url).href}
          alt="Our first meeting"
          style={styles.image}
        />
      </div>
      <p style={styles.caption}>we look so cute together hehe</p>
    </div>,

    <div key="4" className="fade-in" style={styles.content}>
      <h3 style={styles.heading}>oh this one is really good too</h3>
      <div style={styles.photoFrame}>
        <img
          src={new URL('./assets/fav.jpg', import.meta.url).href}
          alt="Our first meeting"
          style={styles.image}
        />
      </div>
      <p style={styles.caption}>lets get more cute pics togetherrr</p>
    </div>,

    <div key="5" className="fade-in" style={styles.content}>
      <h3 style={styles.heading}>and also lets go eat this again</h3>
      <div style={styles.photoFrame}>
        <img
          src={new URL('./assets/mealfav.jpg', import.meta.url).href}
          alt="Our first meeting"
          style={styles.image}
        />
      </div>
      <p style={styles.caption}>love going out to eat with u hehe</p>
    </div>,

    <div key="6" className="fade-in" style={styles.content}>
      <h3 style={styles.heading}>and... lets stick with 小辣...</h3>
      <div style={styles.photoFrame}>
        <img
          src={new URL('./assets/favmeal2.jpg', import.meta.url).href}
          alt="Our first meeting"
          style={styles.image}
        />
      </div>
      <p style={styles.caption}>idw my ass to burn again dawg</p>
    </div>,

    // 4. Scratch photo
    <div key="7" className="fade-in" style={styles.content} onClick={(e) => e.stopPropagation()}>
      <h3 style={styles.heading}>Scratch for something</h3>
      <ScratchCard />
      <p
        onClick={() => setStep(step + 1)}
        style={{ ...styles.tapHint, marginTop: '20px', cursor: 'pointer', opacity: 1, color: '#ff6b6b', fontWeight: 'bold' }}
      >
        Done? Tap here to read my letter.
      </p>
    </div>,

    // 5. Letter
    <div key="8" className="fade-in" style={styles.content}>
      <div style={styles.letter}>
        <p>To more days together,</p>
        <p>My pookie,</p>
        <p>
          I wanted to make this little space just for us.
          I pray that we will grow stay togehter for long long hehe.
          Thank you for being the highlight of every single day hehe.
          I know I am bad at expressing myself... but
          I love you more than words can say. 👉👈
        </p>
        <p style={{ marginTop: '20px' }}>爱你哟,</p>
        <p><strong>oel</strong></p>
      </div>
      <button onClick={(e) => { e.stopPropagation(); setStep(0); }} style={styles.resetBtn}>
        See it again? ❤️
      </button>
    </div>
  ];

  return (
    <>
      <style>
        {`
         html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden; /* Prevents scrolling */
            position: fixed; /* Extra lock for mobile */
            touch-action: none; /* Disables pull-to-refresh and scroll gestures */
          }
          #root {
            width: 100%;
            height: 100%;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
          @keyframes float {
            0% { transform: translateY(100vh) scale(0); opacity: 0; }
            20% { opacity: 0.8; }
            100% { transform: translateY(-20vh) scale(1.2); opacity: 0; }
          }
          .heart {
            position: absolute;
            color: #ff6b6b;
            font-size: 20px;
            user-select: none;
            pointer-events: none;
            z-index: 0;
            animation: float linear infinite;
          }
        `}
      </style>
      <div style={styles.body} onClick={nextStep}>
        <div style={styles.container}>
          <FloatingHearts />
          <div style={styles.progressContainer}>
            <div style={{ ...styles.progressBar, width: `${((step + 1) / sections.length) * 100}%` }}></div>
          </div>
          <div style={styles.viewPort}>
            {sections[step]}
          </div>
        </div>
      </div>
    </>
  );
};

// --- Scratch Card Component remains the same ---
const ScratchCard = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#C0C0C0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#4a4a4a';
    ctx.font = '18px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Scratch here! ✨', canvas.width / 2, canvas.height / 2);

    const scratch = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fill();
    };
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('touchmove', scratch);
  }, []);

  return (
    <div style={styles.scratchContainer}>
      <div style={styles.revealedContent}>
        <span style={{ fontSize: '3.5rem' }}>💌</span>
        <p style={{ fontWeight: 'bold', color: '#ff6b6b' }}>I'm so lucky to have you bb!</p>
      </div>
      <canvas ref={canvasRef} width={300} height={200} style={styles.canvas} />
    </div>
  );
};

const styles = {
  root: {
    margin: 0,
    padding: 0,
  },
  html: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  body: {
    backgroundColor: '#ffafbd',
    backgroundImage: 'linear-gradient(to bottom, #ffafbd, #ffc3a0)',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    cursor: 'pointer'
  },
  container: {
    width: '100%',
    maxWidth: '450px',
    height: '100%', // Use 100% of the body's height
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',

    boxShadow: '0 0 50px rgba(0,0,0,0.1)',
    margin: 0,
  },
  progressContainer: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    right: '20px',
    height: '4px',
    backgroundColor: '#eee',
    borderRadius: '10px'
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#ff6b6b',
    transition: 'width 0.5s ease-in-out',
    borderRadius: '10px'
  },
  viewPort: { width: '100%' },
  content: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' },
  title: { fontSize: '2.2rem', color: '#ff6b6b', margin: '0 0 10px 0' },
  subtitle: { color: '#666', fontSize: '1.1rem' },
  daysCount: { fontSize: '5rem', fontWeight: '900', color: '#ff6b6b', lineHeight: '1' },
  tapHint: { fontSize: '0.8rem', opacity: 0.4, marginTop: '40px' },
  photoFrame: { width: '85%', borderRadius: '20px', overflow: 'hidden', border: '6px solid white', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', margin: '20px 0' },
  image: { width: '100%', display: 'block' },
  scratchContainer: { position: 'relative', width: '300px', height: '200px', margin: '20px 0' },
  revealedContent: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff0f0', borderRadius: '15px' },
  canvas: { position: 'absolute', top: 0, left: 0, borderRadius: '15px' },
  letter: { textAlign: 'left', padding: '25px', backgroundColor: '#fff9f9', borderRadius: '15px', borderLeft: '5px solid #ff6b6b', fontStyle: 'italic', lineHeight: '1.7', color: '#444' },
  resetBtn: { marginTop: '30px', border: 'none', background: 'none', color: '#ff6b6b', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.9rem' }

};

export default App;