import './Main.css';

export const MainPage: React.FC = () => {
    return (
        <div className="main-page">
            <div className="main-container">
                <div className="parent">
                    {/* Header Section - div1 */}
                    <div className="header-section div1">
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Поиск..."
                                className="search-input"
                            />
                        </div>
                        <div className="icon-buttons">
                            <button className="icon-button">
                                🔔
                            </button>
                            <button className="icon-button">
                                👤
                            </button>
                            <button className="icon-button">
                                ☰
                            </button>
                        </div>
                    </div>
                    <div className="main-content-container">
                        <div className="left-container">
                            <div className="news-container">
                                <div className="card news-card div2">
                                    <div className="news-image news-1"></div>
                                    <div className="news-content">
                                        <div className="news-title">ESL добавит поединок за третье место на всех турнирах VRS — шоу-матчей больше не будет</div>
                                    </div>
                                    <div className="news-link">Подробнее</div>
                                </div>

                                <div className="card news-card div7">
                                    <div className="news-image news-2"></div>
                                    <div className="news-content">
                                        <div className="news-title">PARIVISION переиграла Gaimin Gladiators в групповой стадии на FISSURE Universe: Episode 5</div>
                                    </div>
                                    <div className="news-link">Подробнее</div>
                                </div>
                            </div>
                            <div className="left-bottom-container">
                                <div className="card slider-section">
                                    <button className="slider-button">←</button>
                                    <div className="slider-numbers">
                                        <div className="slider-number active">1</div>
                                        <div className="slider-number">2</div>
                                        <div className="slider-number">3</div>
                                    </div>
                                    <button className="slider-button">→</button>
                                </div>

                                <div className="card events-section div13">
                                    <div className="event-item">
                                        <div className="game-logo"></div>
                                        <div className="event-details">
                                            <div className="event-time">14:30</div>
                                            <div className="event-teams">
                                                <div className="team-logo"></div>
                                                <span>vs</span>
                                                <div className="team-logo"></div>
                                            </div>
                                        </div>
                                        <div className="events-controls">
                                            <button className="events-scroll-button">↑</button>
                                            <button className="events-scroll-button">↓</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="right-container">
                            <div className="card logo-section div8">
                                <div className="slogan">Присоединяйся
                                    <span className="red-text" >сегодня</span>
                                    и начинай
                                    <span className="red-text">побеждать!</span>
                                </div>
                            </div>
                            <div className="card chat-section div9">
                                <div className="chat-header">Чат 123123 онлайн</div>
                                <div className="chat-messages">
                                    <div className="chat-message">
                                        <div className="chat-avatar"></div>
                                        <div className="chat-content">
                                            <div className="chat-username">[Пользователь1]</div>
                                            <div className="chat-text">Привет всем! Как дела?</div>
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="chat-avatar"></div>
                                        <div className="chat-content">
                                            <div className="chat-username">[Пользователь2]</div>
                                            <div className="chat-text">Отлично! А у тебя как?</div>
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="chat-avatar"></div>
                                        <div className="chat-content">
                                            <div className="chat-username">[Пользователь3]</div>
                                            <div className="chat-text">Кто играет сегодня?</div>
                                        </div>
                                    </div>
                                    <div className="chat-message">
                                        <div className="chat-avatar"></div>
                                        <div className="chat-content">
                                            <div className="chat-username">[Модератор]</div>
                                            <div className="chat-text">Добро пожаловать в чат!</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-input-container">
                                    <input
                                        type="text"
                                        placeholder="Введите сообщение..."
                                        className="chat-input"
                                    />
                                    <button className="chat-send-button">
                                        🔍
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