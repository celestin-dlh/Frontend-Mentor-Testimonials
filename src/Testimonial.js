import React from 'react'
import { ReactComponent as Quote } from './assets/bg-pattern-quotation.svg'
import './styles/Testimonial.css'

function Testimonial({
    gridArea,
    image,
    name,
    verifiedGraduate,
    title,
    text,
    backgroundColor = '#FFFFFF',
    nameColor = '#FFFFFF',
    titleColor = '#FFFFFF',
    textColor = '#FFFFFF',
    borderColor = '',
    haveQuote = false,
}) {
    const inlineStyle = {
        gridArea,
        backgroundColor: backgroundColor
    }

    return (
        <div className="testimonial" style={inlineStyle}>
            {haveQuote && <Quote className="testimonial__quote" />}
            <div className="testimonial__identity">
                <img 
                    src={image} 
                    style={{ borderColor }}
                    alt="testimonial-pic" 
                    className="testimonial__identity__picture" 
                />
                <div style={{ color: nameColor }}>
                    <p className="testimonial__identity__name">{name}</p>
                    {verifiedGraduate &&
                        <p className="testimonial__identity__graduated">Verified Graduate</p>
                    }
                </div>
            </div>
            <h2 style={{color: titleColor }} className="testimonial__title">{title}</h2>
            <p style={{color: textColor}} className="testimonial__text">{text}</p>
        </div>
    )
}

export default Testimonial
