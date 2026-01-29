import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiRefreshCw, FiZap } from 'react-icons/fi';
import '../App.css';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const SPEED = 150;

const Playground = () => {
      const [snake, setSnake] = useState(INITIAL_SNAKE);
      const [food, setFood] = useState({ x: 15, y: 10 });
      const [direction, setDirection] = useState(INITIAL_DIRECTION);
      const [isGameOver, setIsGameOver] = useState(false);
      const [score, setScore] = useState(0);
      const [isGameActive, setIsGameActive] = useState(false);
      const gameContainerRef = useRef(null);

      const generateFood = useCallback(() => {
            const newFood = {
                  x: Math.floor(Math.random() * GRID_SIZE),
                  y: Math.floor(Math.random() * GRID_SIZE)
            };
            setFood(newFood);
      }, []);

      const resetGame = () => {
            setSnake(INITIAL_SNAKE);
            setDirection(INITIAL_DIRECTION);
            setIsGameOver(false);
            setScore(0);
            setIsGameActive(true);
            generateFood();
      };

      const moveSnake = useCallback(() => {
            if (!isGameActive || isGameOver) return;

            setSnake(prevSnake => {
                  const head = { ...prevSnake[0] };
                  head.x += direction.x;
                  head.y += direction.y;

                  // Wall Collision
                  if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
                        setIsGameOver(true);
                        setIsGameActive(false);
                        return prevSnake;
                  }

                  // Self Collision
                  if (prevSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
                        setIsGameOver(true);
                        setIsGameActive(false);
                        return prevSnake;
                  }

                  const newSnake = [head, ...prevSnake];

                  // Food Collision
                  if (head.x === food.x && head.y === food.y) {
                        setScore(s => s + 10);
                        generateFood();
                  } else {
                        newSnake.pop();
                  }

                  return newSnake;
            });
      }, [direction, food, isGameActive, isGameOver, generateFood]);

      useEffect(() => {
            const interval = setInterval(moveSnake, SPEED);
            return () => clearInterval(interval);
      }, [moveSnake]);

      useEffect(() => {
            const handleKeyPress = (e) => {
                  if (!isGameActive) return;
                  switch (e.key) {
                        case 'ArrowUp': if (direction.y === 0) setDirection({ x: 0, y: -1 }); break;
                        case 'ArrowDown': if (direction.y === 0) setDirection({ x: 0, y: 1 }); break;
                        case 'ArrowLeft': if (direction.x === 0) setDirection({ x: -1, y: 0 }); break;
                        case 'ArrowRight': if (direction.x === 0) setDirection({ x: 1, y: 0 }); break;
                        default: break;
                  }
            };
            window.addEventListener('keydown', handleKeyPress);
            return () => window.removeEventListener('keydown', handleKeyPress);
      }, [direction, isGameActive]);

      return (
            <section id="playground" className="playground-section">
                  <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                  >
                        Neural Playground
                  </motion.h2>

                  <div className="game-wrapper">
                        <div className="game-stats">
                              <div className="stat-card">
                                    <span>SCORE</span>
                                    <strong>{score}</strong>
                              </div>
                        </div>

                        <div className="game-board-container" ref={gameContainerRef}>
                              <div className="game-board">
                                    {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
                                          const x = i % GRID_SIZE;
                                          const y = Math.floor(i / GRID_SIZE);
                                          const isSnake = snake.some(s => s.x === x && s.y === y);
                                          const isHead = snake[0].x === x && snake[0].y === y;
                                          const isFood = food.x === x && food.y === y;

                                          return (
                                                <div
                                                      key={i}
                                                      className={`cell ${isSnake ? 'snake' : ''} ${isHead ? 'head' : ''} ${isFood ? 'food' : ''}`}
                                                />
                                          );
                                    })}
                              </div>

                              <AnimatePresence>
                                    {!isGameActive && (
                                          <motion.div
                                                className="game-overlay"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                          >
                                                {isGameOver ? (
                                                      <div className="overlay-content">
                                                            <h3 style={{ color: 'var(--accent-color)' }}>COLLISION DETECTED</h3>
                                                            <p>Final Score: {score}</p>
                                                            <button className="game-btn restart" onClick={resetGame}>
                                                                  <FiRefreshCw /> REBOOT_SYSTEM
                                                            </button>
                                                      </div>
                                                ) : (
                                                      <div className="overlay-content">
                                                            <h3>CYBER_SNAKE v1.0</h3>
                                                            <p>Use arrow keys to navigate the grid.</p>
                                                            <button className="game-btn start" onClick={() => setIsGameActive(true)}>
                                                                  <FiPlay /> INITIALIZE_PLAY
                                                            </button>
                                                      </div>
                                                )}
                                          </motion.div>
                                    )}
                              </AnimatePresence>
                        </div>

                        <div className="game-controls-hint">
                              <FiZap /> COLLECT_DATA_MODULES_TO_GROW
                        </div>
                  </div>
            </section>
      );
};

export default Playground;
