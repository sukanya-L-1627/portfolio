import React from 'react';
import { X, PlayCircle } from 'lucide-react';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, videoUrl, title, description = [], icon = '' }) => {
    if (!isOpen) return null;

    return (
        <div className="video-modal-overlay" onClick={onClose}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>

                {/* Header */}
                <div className="video-modal-header">
                    <div className="modal-header-left">
                        <span className="modal-flame">{icon}</span>
                        <h3>{title}</h3>
                    </div>
                    <button className="video-close-btn" onClick={onClose}>
                        <X size={22} />
                    </button>
                </div>

                {/* Description — shown FIRST */}
                {description.length > 0 && (
                    <div className="video-modal-description">
                        <ul className="modal-desc-list">
                            {description.map((point, idx) => (
                                <li key={idx} className="modal-desc-item">
                                    <span className="modal-desc-bullet">▸</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Video — shown AFTER */}
                <div className="video-viewport">
                    {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                        <iframe
                            src={videoUrl.replace('watch?v=', 'embed/')}
                            title={title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <video controls autoPlay className="local-video">
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>

            </div>
        </div>
    );
};

export default VideoModal;
