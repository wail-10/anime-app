import React from 'react'

const VoiceActorCard = ({imgUrl, name, language}) => {
    const cardStyle = {
        position: 'relative',
        width: '300px',
        height: '300px',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
    };
    
    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };
    
    const textStyle = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black background color with opacity
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        padding: '8px',
        boxSizing: 'border-box',
    };
    
    return (
        <div className="max-w-xs mx-2 rounded overflow-hidden shadow-lg">
            <div style={cardStyle}>
                <img src={imgUrl} alt={name} style={imageStyle} />
                <div style={textStyle}>
                    <div className="font-bold text-lg mb-2">{name}</div>
                    <p className="text-sm">{language}</p>
                </div>
            </div>
        </div>
    )
}

export default VoiceActorCard