import React from 'react';
import { Composition } from 'remotion';
import { PortfolioTeaser } from './PortfolioTeaser';
import { PortfolioTeaserSquare } from './PortfolioTeaserSquare';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 16:9 Landscape - YouTube & LinkedIn Featured Video (1920x1080 @ 60fps, 30s = 1800 frames) */}
      <Composition
        id="PortfolioTeaser"
        component={PortfolioTeaser}
        durationInFrames={1800}
        fps={60}
        width={1920}
        height={1080}
      />

      {/* 1:1 Square - LinkedIn Feed & GitHub Profile README (1080x1080 @ 60fps, 30s = 1800 frames) */}
      <Composition
        id="PortfolioTeaserSquare"
        component={PortfolioTeaserSquare}
        durationInFrames={1800}
        fps={60}
        width={1080}
        height={1080}
      />
    </>
  );
};
