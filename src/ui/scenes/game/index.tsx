import {
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import type { FC } from 'react';
import { LoadScene } from 'remiz/events';

import { EngineContext } from '../../providers';
import { PLAYER_ID } from '../../../consts/templates';
import { GAME_ID } from '../../../consts/scenes';
import * as EventType from '../../../game/events';

import {
  HealthBar,
  ManaBar,
  ResurrectButton,
} from './components';
import './style.css';

export const Game: FC = () => {
  const { scene } = useContext(EngineContext);

  const [isGameOver, setIsGameOver] = useState(false);

  const handleRestart = useCallback(() => {
    scene.dispatchEvent(LoadScene, {
      sceneId: GAME_ID,
      loaderId: null,
      levelId: null,
      unloadCurrent: true,
      clean: true,
    });
  }, []);

  useEffect(() => {
    const player = scene.getEntityById(PLAYER_ID);

    const handleKill = (): void => {
      setIsGameOver(true);
    };

    player?.addEventListener(EventType.Kill, handleKill);

    return () => player?.removeEventListener(EventType.Kill, handleKill);
  }, []);

  return (
    <div className="game">
      {isGameOver ? (
        <div className="game__game-over">
          <h1 className="game-over__title">Game Over</h1>
          <button className="game-over__button" type="button" onClick={handleRestart}>Restart</button>
        </div>
      ) : (
        <>
          <div className="game__header">
            <HealthBar />
            <ManaBar />
          </div>
          <div className="game__footer">
            <ResurrectButton />
          </div>
        </>
      )}
    </div>
  );
};
