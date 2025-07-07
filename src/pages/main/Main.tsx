import './Main.css';

export const MainPage: React.FC = () => {
    return (
        <div className="main-page">
            <div className="main-container">
                <div className="parent">

                    <div className="header-section">
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Поиск..."
                                className="search-input"
                            />
                            <svg width="14.286133" height="14.285767" viewBox="0 0 14.2861 14.2858" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs />
                                <path id="Vector" d="M14.24 13.25L9.6 8.62C10.32 7.69 10.71 6.55 10.71 5.35C10.71 3.92 10.15 2.58 9.14 1.56C8.13 0.55 6.78 0 5.35 0C3.92 0 2.58 0.55 1.56 1.56C0.55 2.58 0 3.92 0 5.35C0 6.78 0.55 8.13 1.56 9.14C2.58 10.15 3.92 10.71 5.35 10.71C6.55 10.71 7.68 10.32 8.62 9.6L13.25 14.24C13.27 14.25 13.28 14.26 13.3 14.27C13.32 14.28 13.34 14.28 13.36 14.28C13.37 14.28 13.39 14.28 13.41 14.27C13.43 14.26 13.45 14.25 13.46 14.24L14.24 13.46C14.25 13.45 14.26 13.43 14.27 13.41C14.28 13.4 14.28 13.38 14.28 13.36C14.28 13.34 14.28 13.32 14.27 13.3C14.26 13.28 14.25 13.27 14.24 13.25ZM8.18 8.18C7.42 8.94 6.42 9.35 5.35 9.35C4.28 9.35 3.28 8.94 2.52 8.18C1.77 7.42 1.35 6.42 1.35 5.35C1.35 4.28 1.77 3.28 2.52 2.52C3.28 1.77 4.28 1.35 5.35 1.35C6.42 1.35 7.43 1.77 8.18 2.52C8.94 3.28 9.35 4.28 9.35 5.35C9.35 6.42 8.94 7.43 8.18 8.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                            </svg>
                        </div>
                        <div className="icon-buttons">
                            <button className="icon-button">
                                <svg width="16.500000" height="21.607178" viewBox="0 0 16.5 21.6072" fill="none" xmlns="http://www.w3.org/2000/svg">

                                    <defs />
                                    <path id="Vector" d="M15.71 17.08L15.12 17.08L15.12 8.74C15.12 5.27 12.56 2.41 9.23 1.93L9.23 0.98C9.23 0.43 8.79 0 8.25 0C7.7 0 7.26 0.43 7.26 0.98L7.26 1.93C3.93 2.41 1.37 5.27 1.37 8.74L1.37 17.08L0.78 17.08C0.35 17.08 0 17.44 0 17.87L0 18.66C0 18.76 0.08 18.85 0.19 18.85L5.5 18.85C5.5 20.37 6.73 21.6 8.25 21.6C9.76 21.6 11 20.37 11 18.85L16.3 18.85C16.41 18.85 16.5 18.76 16.5 18.66L16.5 17.87C16.5 17.44 16.14 17.08 15.71 17.08ZM8.25 20.03C7.59 20.03 7.07 19.5 7.07 18.85L9.42 18.85C9.42 19.5 8.9 20.03 8.25 20.03ZM3.14 17.08L3.14 8.74C3.14 7.37 3.67 6.09 4.63 5.12C5.6 4.16 6.88 3.63 8.25 3.63C9.61 3.63 10.89 4.16 11.86 5.12C12.82 6.09 13.35 7.37 13.35 8.74L13.35 17.08L3.14 17.08Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                                </svg>
                            </button>
                            <button className="icon-button">
                                <svg width="20.142578" height="21.321411" viewBox="0 0 20.1426 21.3214" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs />
                                    <path id="Vector" d="M19.35 17.4C18.84 16.2 18.11 15.11 17.19 14.19C16.27 13.27 15.18 12.54 13.99 12.04C13.98 12.03 13.97 12.03 13.96 12.02C15.62 10.82 16.71 8.85 16.71 6.64C16.71 2.97 13.74 0 10.07 0C6.4 0 3.42 2.97 3.42 6.64C3.42 8.85 4.51 10.82 6.18 12.02C6.17 12.03 6.16 12.03 6.15 12.04C4.95 12.54 3.87 13.27 2.94 14.2C2.02 15.11 1.29 16.2 0.79 17.4C0.29 18.57 0.02 19.82 0 21.1C-0.01 21.13 0 21.15 0.01 21.18C0.02 21.21 0.04 21.23 0.06 21.25C0.08 21.27 0.1 21.29 0.13 21.3C0.15 21.31 0.18 21.32 0.21 21.32L1.82 21.32C1.93 21.32 2.03 21.22 2.03 21.11C2.08 19.04 2.91 17.1 4.38 15.64C5.9 14.12 7.92 13.28 10.07 13.28C12.21 13.28 14.23 14.12 15.75 15.64C17.22 17.1 18.05 19.04 18.1 21.11C18.11 21.23 18.2 21.32 18.32 21.32L19.92 21.32C19.95 21.32 19.98 21.31 20.01 21.3C20.03 21.29 20.06 21.27 20.08 21.25C20.1 21.23 20.11 21.21 20.12 21.18C20.13 21.15 20.14 21.13 20.14 21.1C20.11 19.82 19.85 18.57 19.35 17.4ZM10.07 11.25C8.84 11.25 7.68 10.77 6.81 9.9C5.94 9.02 5.46 7.87 5.46 6.64C5.46 5.41 5.94 4.25 6.81 3.38C7.68 2.51 8.84 2.03 10.07 2.03C11.3 2.03 12.45 2.51 13.32 3.38C14.19 4.25 14.67 5.41 14.67 6.64C14.67 7.87 14.19 9.02 13.32 9.9C12.45 10.77 11.3 11.25 10.07 11.25Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                                </svg>
                            </button>
                            <button className="icon-button">
                                <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >

                                    <defs>
                                        <clipPath id="clip1422_13209">
                                            <rect id="Icon /Menu" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip1422_13209)">
                                        <path id="Vector" d="M18.75 2.13L1.25 2.13C1.15 2.13 1.07 2.21 1.07 2.31L1.07 3.74C1.07 3.84 1.15 3.92 1.25 3.92L18.75 3.92C18.84 3.92 18.92 3.84 18.92 3.74L18.92 2.31C18.92 2.21 18.84 2.13 18.75 2.13ZM18.75 16.06L1.25 16.06C1.15 16.06 1.07 16.14 1.07 16.24L1.07 17.67C1.07 17.77 1.15 17.85 1.25 17.85L18.75 17.85C18.84 17.85 18.92 17.77 18.92 17.67L18.92 16.24C18.92 16.14 18.84 16.06 18.75 16.06ZM18.75 9.1L1.25 9.1C1.15 9.1 1.07 9.18 1.07 9.28L1.07 10.71C1.07 10.8 1.15 10.88 1.25 10.88L18.75 10.88C18.84 10.88 18.92 10.8 18.92 10.71L18.92 9.28C18.92 9.18 18.84 9.1 18.75 9.1Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                                    </g>
                                </svg>
                            </button>

                        </div>
                    </div>
                    <div className="main-content-container">
                        <div className="left-container">
                            <div className="news-container">
                                <div className="card news-card div2">
                                    <div className="news-image news-1 image"></div>
                                    <div className="news-content">
                                        <div className="news-title">ESL добавит поединок за третье место на всех турнирах VRS — шоу-матчей больше не будет</div>
                                    </div>
                                    <div className="news-link">Подробнее</div>
                                </div>

                                <div className="card news-card div7">
                                    <div className="news-image news-2 image"></div>
                                    <div className="news-content">
                                        <div className="news-title">PARIVISION переиграла Gaimin Gladiators в групповой стадии на FISSURE Universe: Episode 5</div>
                                    </div>
                                    <div className="news-link">Подробнее</div>
                                </div>
                            </div>
                            <div className="left-bottom-container">
                                <div className="card slider-section">
                                    <button className="slider-button"><svg width="6.507812" height="10.362305" viewBox="0 0 6.50781 10.3623" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs />
                                        <path id="Vector" d="M6.5 1.16L6.5 0.1C6.5 0.01 6.4 -0.04 6.33 0.02L0.16 4.83C0.11 4.87 0.07 4.93 0.04 4.98C0.01 5.04 0 5.11 0 5.18C0 5.24 0.01 5.31 0.04 5.37C0.07 5.43 0.11 5.48 0.16 5.52L6.33 10.33C6.4 10.39 6.5 10.34 6.5 10.25L6.5 9.19C6.5 9.12 6.47 9.06 6.42 9.02L1.5 5.18L6.42 1.33C6.47 1.29 6.5 1.23 6.5 1.16Z" fill="#000000" fill-opacity="0.250000" fill-rule="evenodd" />
                                    </svg>
                                    </button>
                                    <div className="slider-numbers">
                                        <div className="slider-number active">1</div>
                                        <div className="slider-number">2</div>
                                        <div className="slider-number">3</div>
                                    </div>
                                    <button className="slider-button"><svg width="6.507812" height="10.363647" viewBox="0 0 6.50781 10.3636" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs />
                                        <path id="Vector" d="M6.33 4.83L0.17 0.02C0.16 0.01 0.14 0 0.12 0C0.1 -0.01 0.07 0 0.06 0.01C0.04 0.02 0.02 0.03 0.01 0.05C0 0.06 0 0.08 0 0.1L0 1.16C0 1.23 0.03 1.29 0.08 1.33L5 5.18L0.08 9.02C0.03 9.06 0 9.13 0 9.19L0 10.25C0 10.34 0.1 10.39 0.17 10.34L6.33 5.52C6.39 5.48 6.43 5.43 6.46 5.37C6.49 5.31 6.5 5.24 6.5 5.18C6.5 5.11 6.49 5.04 6.46 4.98C6.43 4.93 6.39 4.87 6.33 4.83Z" fill="#000000" fill-opacity="0.450000" fill-rule="evenodd" />
                                    </svg>
                                    </button>
                                </div>

                                <div className="card events-section">
                                    <div className="event-game">
                                        <div className="game-logo image game">
                                        </div>
                                        <div className="event-time">14:30</div>
                                    </div>
                                    <div className="event-details">
                                        <div className="event-teams">
                                            <div className="team-logo team-1 image"></div>
                                            <span>vs</span>
                                            <div className="team-logo team-2 image"></div>
                                        </div>
                                    </div>
                                    <div className="events-controls">
                                        <button className="events-scroll-button">↑</button>
                                        <button className="events-scroll-button">↓</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="right-container">
                            <div className="card logo-section">
                                <div className="slogan">
                                    <div className="text-line">Присоединяйся</div>
                                    <div className="text-line"><span className="red-text" >сегодня</span></div>
                                    <div className="text-line">и начинай&nbsp;<span className="red-text">побеждать!</span></div>
                                </div>
                                <div className="text-link">CyberSportsPortal.ru</div>
                            </div>
                            <div className="card chat-section">
                                <div className="chat-header">Чат <div className="online-ellipse"></div> онлайн 1251</div>
                                <div className="chat-messages">
                                    <div className="chat-message">
                                        <div className="chat-avatar avatar-1 image"></div>
                                        <div className="chat-content">
                                            <div className="chat-text"><span className="chat-username">[Chopper]</span>Спирит топ.</div>
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="chat-avatar avatar-2 image"></div>
                                        <div className="chat-content">
                                            <div className="chat-text"><span className="chat-username">[Leonid]</span>Согласен.</div>
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="chat-avatar avatar-3 image"></div>
                                        <div className="chat-content">
                                            <div className="chat-text"><span className="chat-username">[Vishnyakov]</span>&nbsp;ЗВЕРЯ 🐉 НЕТ 🐉СИЛЬНЕЙ 🐉ДРАКОНА 🐉 СПИРИТ 🐉ГОРДОСТЬ 🐉 РЕГИОНА🐉.</div>
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="chat-avatar avatar-4 image"></div>
                                        <div className="chat-content">
                                            <div className="chat-text"><span className="chat-username">[Batya]</span>&nbsp;Таганрог рад.</div>
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="chat-avatar avatar-5 image"></div>
                                        <div className="chat-content">
                                            <div className="chat-text"><span className="chat-username">[Spirit lover]</span>&nbsp;Team Spirit one love.</div>
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="chat-avatar avatar-6 image"></div>
                                        <div className="chat-content">
                                            <div className="chat-text"><span className="chat-username">[Champion]</span>&nbsp;Пишу Вам об очередном случае - мой сын снова... </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-input-container ">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Введите сообщение..."
                                            className="chat-input"
                                        />
                                    </div>

                                    <button className="chat-send-button">
                                        <svg width="17.448242" height="17.446045" viewBox="0 0 17.4482 17.446" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <defs />
                                            <path id="Vector" d="M17.27 8.45L0.46 0.03C0.39 -0.01 0.31 -0.01 0.24 0C0.16 0.02 0.09 0.08 0.04 0.15C0 0.22 -0.02 0.31 0 0.39L1.74 7.47C1.76 7.57 1.84 7.66 1.95 7.69L4.91 8.71L1.95 9.73C1.84 9.77 1.76 9.85 1.74 9.96L0 17.04C-0.01 17.12 -0.01 17.2 0.03 17.26C0.11 17.42 0.3 17.49 0.46 17.41L17.27 9.03C17.33 9 17.38 8.95 17.41 8.89C17.49 8.73 17.42 8.53 17.27 8.45ZM1.99 15.03L3 10.9L8.93 8.87C8.97 8.85 9.01 8.81 9.03 8.77C9.05 8.68 9.01 8.59 8.93 8.56L3 6.53L1.99 2.41L14.61 8.74L1.99 15.03Z" fill="#000000" fill-opacity="1.000000" fill-rule="nonzero" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};