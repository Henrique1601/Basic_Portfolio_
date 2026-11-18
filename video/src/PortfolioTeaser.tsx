import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence
} from 'remotion';

// ==========================================
// SCENE 1: INTRO & BRANDING (0 - 6s)
// ==========================================
const SceneIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 100 }
  });

  const subtitleProgress = spring({
    frame: frame - 25,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 100 }
  });

  const badgeOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp'
  });

  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(circle at 50% 30%, #1e1b4b 0%, #030712 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <div
        style={{
          opacity: badgeOpacity,
          padding: '8px 24px',
          background: 'rgba(99, 102, 241, 0.15)',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          borderRadius: 30,
          color: '#818cf8',
          fontSize: 22,
          fontWeight: 600,
          marginBottom: 30,
          letterSpacing: 2
        }}
      >
        PORTFÓLIO &amp; SHOWCASE TÉCNICO
      </div>

      <h1
        style={{
          transform: `scale(${titleProgress})`,
          fontSize: 84,
          fontWeight: 800,
          margin: '0 0 20px 0',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #ffffff 40%, #818cf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Henrique Bezerra
      </h1>

      <p
        style={{
          transform: `translateY(${interpolate(subtitleProgress, [0, 1], [40, 0])}px)`,
          opacity: subtitleProgress,
          fontSize: 34,
          color: '#94a3b8',
          maxWidth: 900,
          textAlign: 'center',
          lineHeight: 1.4,
          margin: 0
        }}
      >
        Desenvolvedor Full-Stack &bull; Especialista em IA &bull; 45+ Projetos Entregues
      </p>
    </AbsoluteFill>
  );
};

// ==========================================
// SCENE 2: GITHUB CONSISTENCY (6 - 12s)
// ==========================================
const SceneGitHub: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const countProgress = spring({
    frame,
    fps,
    config: { damping: 16 }
  });

  const countValue = Math.floor(interpolate(countProgress, [0, 1], [0, 648]));

  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(circle at 60% 40%, #0c1a30 0%, #030712 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <div
        style={{
          padding: '6px 20px',
          background: 'rgba(16, 185, 129, 0.15)',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          borderRadius: 24,
          color: '#34d399',
          fontSize: 20,
          fontWeight: 600,
          marginBottom: 20
        }}
      >
        CONSISTÊNCIA &bull; GITHUB ACTIVITY
      </div>

      <div
        style={{
          fontSize: 140,
          fontWeight: 900,
          background: 'linear-gradient(135deg, #34d399 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1
        }}
      >
        {countValue}
      </div>

      <p style={{ fontSize: 32, color: '#94a3b8', marginTop: 15, marginBottom: 40 }}>
        contribuições reais no último ano no GitHub
      </p>

      {/* Heatmap preview representation */}
      <div
        style={{
          display: 'flex',
          gap: 6,
          background: 'rgba(15, 23, 42, 0.8)',
          padding: '24px 36px',
          borderRadius: 20,
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {Array.from({ length: 28 }).map((_, w) => (
          <div key={w} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {Array.from({ length: 7 }).map((_, d) => {
              const isActive = (w * 7 + d) % 3 === 0 || (w > 18 && (w * 7 + d) % 2 === 0);
              const isPeak = w > 20 && (w * 7 + d) % 5 === 0;
              return (
                <div
                  key={d}
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 4,
                    background: isPeak
                      ? '#6366f1'
                      : isActive
                      ? 'rgba(99, 102, 241, 0.55)'
                      : 'rgba(255, 255, 255, 0.08)'
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, color: '#64748b', fontSize: 20 }}>
        @Henrique1601 &bull; 88 Repositórios &bull; Picos de 113 contribuições/dia
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// SCENE 3: AI & ARCHITECTURE (12 - 18s)
// ==========================================
const SceneAI: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 15 }
  });

  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(circle at 40% 50%, #2e1065 0%, #030712 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <div
        style={{
          padding: '6px 20px',
          background: 'rgba(168, 85, 247, 0.2)',
          border: '1px solid rgba(168, 85, 247, 0.5)',
          borderRadius: 24,
          color: '#c084fc',
          fontSize: 20,
          fontWeight: 600,
          marginBottom: 25
        }}
      >
        ENGENHARIA AVANÇADA DE IA
      </div>

      <h2
        style={{
          fontSize: 64,
          fontWeight: 800,
          margin: '0 0 40px 0',
          textAlign: 'center',
          transform: `scale(${scale})`
        }}
      >
        Rede Full-Mesh com 16 Agentes Especialistas
      </h2>

      <div style={{ display: 'flex', gap: 30, maxWidth: 1400 }}>
        {[
          { title: 'TypeSafe AI', desc: 'Schemas Zod estritos e zero alucinação', color: '#38bdf8' },
          { title: '26 Servidores MCP', desc: 'Protocolo padronizado de contexto e ferramentas', color: '#c084fc' },
          { title: 'Segundo Cérebro', desc: 'Zero amnésia com persistência e Obsidian', color: '#34d399' }
        ].map((item, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: 'rgba(15, 23, 42, 0.85)',
              border: `1px solid ${item.color}55`,
              borderRadius: 24,
              padding: '36px 28px',
              textAlign: 'center',
              boxShadow: `0 12px 30px ${item.color}15`
            }}
          >
            <h3 style={{ fontSize: 32, margin: '0 0 12px 0', color: item.color }}>{item.title}</h3>
            <p style={{ fontSize: 20, color: '#cbd5e1', margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// SCENE 4: PROJECTS SHOWCASE (18 - 24s)
// ==========================================
const SceneProjects: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: { damping: 14 }
  });

  const projects = [
    { name: 'SocialCraft Studio', category: 'Remotion + GSAP + IA', color: '#a855f7' },
    { name: 'AppCraft', category: 'Next.js 15 + Neon Postgres', color: '#06b6d4' },
    { name: 'HackerCraft', category: 'Cybersecurity CTF & AI Tutor', color: '#10b981' },
    { name: 'Fotos Hidrômetros', category: 'PWA Offline-First de Campo', color: '#3b82f6' }
  ];

  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <div
        style={{
          padding: '6px 20px',
          background: 'rgba(56, 189, 248, 0.15)',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          borderRadius: 24,
          color: '#38bdf8',
          fontSize: 20,
          fontWeight: 600,
          marginBottom: 20
        }}
      >
        PRODUÇÃO REAL &bull; CASE STUDIES
      </div>

      <h2 style={{ fontSize: 60, fontWeight: 800, margin: '0 0 50px 0' }}>
        45+ Projetos Entregues
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 25,
          width: 1200,
          transform: `scale(${progress})`
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(30, 41, 59, 0.7)',
              border: `1px solid ${p.color}66`,
              borderRadius: 20,
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700, color: '#ffffff' }}>{p.name}</div>
            <div style={{ fontSize: 18, color: p.color, fontWeight: 600 }}>{p.category}</div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// SCENE 5: OUTRO & CALL TO ACTION (24 - 30s)
// ==========================================
const SceneOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 14 }
  });

  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(circle at 50% 40%, #1e1b4b 0%, #030712 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <h2
        style={{
          transform: `scale(${scale})`,
          fontSize: 72,
          fontWeight: 900,
          margin: '0 0 20px 0',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #ffffff 40%, #818cf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Vamos construir algo incrível juntos?
      </h2>

      <p style={{ fontSize: 32, color: '#94a3b8', margin: '0 0 50px 0' }}>
        Disponível para novos desafios, projetos full-stack e soluções com IA.
      </p>

      <div style={{ display: 'flex', gap: 30 }}>
        <div
          style={{
            padding: '16px 36px',
            background: '#6366f1',
            borderRadius: 30,
            fontSize: 24,
            fontWeight: 700,
            boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)'
          }}
        >
          LinkedIn: Henrique Bezerra dos Santos
        </div>
        <div
          style={{
            padding: '16px 36px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            borderRadius: 30,
            fontSize: 24,
            fontWeight: 700
          }}
        >
          GitHub: @Henrique1601
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const PortfolioTeaser: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={360}>
        <SceneIntro />
      </Sequence>
      <Sequence from={360} durationInFrames={360}>
        <SceneGitHub />
      </Sequence>
      <Sequence from={720} durationInFrames={360}>
        <SceneAI />
      </Sequence>
      <Sequence from={1080} durationInFrames={360}>
        <SceneProjects />
      </Sequence>
      <Sequence from={1440} durationInFrames={360}>
        <SceneOutro />
      </Sequence>
    </AbsoluteFill>
  );
};
