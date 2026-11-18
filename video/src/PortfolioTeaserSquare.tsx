import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence
} from 'remotion';

export const PortfolioTeaserSquare: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: '#030712', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <Sequence from={0} durationInFrames={360}>
        <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center', background: 'radial-gradient(circle, #1e1b4b 0%, #030712 100%)' }}>
          <div style={{ padding: '6px 20px', background: 'rgba(99, 102, 241, 0.2)', border: '1px solid #818cf8', borderRadius: 20, color: '#818cf8', fontSize: 18, marginBottom: 25, fontWeight: 700 }}>PORTFÓLIO TÉCNICO</div>
          <h1 style={{ fontSize: 64, fontWeight: 900, margin: '0 0 15px 0' }}>Henrique Bezerra</h1>
          <p style={{ fontSize: 28, color: '#94a3b8', maxWidth: 750 }}>Desenvolvedor Full-Stack &bull; IA &bull; 45+ Projetos</p>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={360} durationInFrames={360}>
        <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center', background: 'radial-gradient(circle, #0c1a30 0%, #030712 100%)' }}>
          <div style={{ fontSize: 110, fontWeight: 900, color: '#34d399', lineHeight: 1 }}>648</div>
          <p style={{ fontSize: 26, color: '#cbd5e1', marginTop: 15, marginBottom: 25 }}>contribuições no último ano no GitHub</p>
          <div style={{ padding: '8px 24px', background: 'rgba(52, 211, 153, 0.15)', border: '1px solid #34d399', borderRadius: 20, color: '#34d399', fontSize: 20, fontWeight: 600 }}>@Henrique1601 &bull; 88 Repositórios</div>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={720} durationInFrames={360}>
        <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center', background: 'radial-gradient(circle, #2e1065 0%, #030712 100%)' }}>
          <div style={{ fontSize: 20, color: '#c084fc', fontWeight: 700, marginBottom: 15 }}>ARQUITETURA &amp; IA</div>
          <h2 style={{ fontSize: 44, fontWeight: 800, margin: '0 0 25px 0' }}>16 Agentes Especialistas em Rede Full-Mesh</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 15, width: '80%' }}>
            <div style={{ background: '#1e293b', padding: 18, borderRadius: 14, fontSize: 20, border: '1px solid #38bdf8' }}>TypeSafe AI &bull; Schemas Zod</div>
            <div style={{ background: '#1e293b', padding: 18, borderRadius: 14, fontSize: 20, border: '1px solid #c084fc' }}>26 Servidores MCP Integrados</div>
            <div style={{ background: '#1e293b', padding: 18, borderRadius: 14, fontSize: 20, border: '1px solid #34d399' }}>Segundo Cérebro &bull; Zero Amnésia</div>
          </div>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={1080} durationInFrames={360}>
        <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center', background: 'radial-gradient(circle, #0f172a 0%, #020617 100%)' }}>
          <h2 style={{ fontSize: 50, fontWeight: 800, margin: '0 0 25px 0' }}>45+ Projetos Entregues</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, width: '90%' }}>
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 14, textAlign: 'left', border: '1px solid #a855f7' }}>
              <strong style={{ fontSize: 22, color: '#fff' }}>SocialCraft</strong>
              <div style={{ color: '#a855f7', fontSize: 16 }}>Remotion + GSAP + IA</div>
            </div>
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 14, textAlign: 'left', border: '1px solid #06b6d4' }}>
              <strong style={{ fontSize: 22, color: '#fff' }}>AppCraft</strong>
              <div style={{ color: '#06b6d4', fontSize: 16 }}>Next.js + Neon Postgres</div>
            </div>
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 14, textAlign: 'left', border: '1px solid #10b981' }}>
              <strong style={{ fontSize: 22, color: '#fff' }}>HackerCraft</strong>
              <div style={{ color: '#10b981', fontSize: 16 }}>CTF Labs &amp; AI Tutor</div>
            </div>
            <div style={{ background: '#1e293b', padding: 20, borderRadius: 14, textAlign: 'left', border: '1px solid #3b82f6' }}>
              <strong style={{ fontSize: 22, color: '#fff' }}>Fotos Hidrômetros</strong>
              <div style={{ color: '#3b82f6', fontSize: 16 }}>PWA Offline de Campo</div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={1440} durationInFrames={360}>
        <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center', background: 'radial-gradient(circle, #1e1b4b 0%, #030712 100%)' }}>
          <h2 style={{ fontSize: 52, fontWeight: 900, margin: '0 0 20px 0' }}>Construindo Soluções Reais</h2>
          <p style={{ fontSize: 24, color: '#94a3b8', marginBottom: 35 }}>Disponível para novos desafios e contratações</p>
          <div style={{ padding: '14px 32px', background: '#6366f1', borderRadius: 25, fontSize: 22, fontWeight: 700, marginBottom: 15 }}>
            LinkedIn: Henrique Bezerra dos Santos
          </div>
          <div style={{ padding: '14px 32px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 25, fontSize: 22, fontWeight: 700 }}>
            GitHub: @Henrique1601
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
