import { useCallback, useContext } from 'react';
import type { FC } from 'react';
import { LoadScene } from 'remiz/events';

import { EngineContext } from '../../providers';
import { GAME_ID } from '../../../consts/scenes';

import './style.css';

export const MainMenu: FC = () => {
  const { scene } = useContext(EngineContext);

  const handlePlay = useCallback(() => {
    scene.dispatchEvent(LoadScene, {
      sceneId: GAME_ID,
      clean: true,
      loaderId: null,
      levelId: null,
    });
  }, [scene]);

  return (
    <div className="main-menu">
      <img
        src="./images/logo.png"
        alt="Alumnus of Darkness"
        className="main-menu__logo"
        width="480px"
      />
      <button className="main-menu__button" type="button" onClick={handlePlay}>Play</button>
    </div>
  );
};
