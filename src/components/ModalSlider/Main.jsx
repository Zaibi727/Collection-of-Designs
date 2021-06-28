import React from 'react';
import ModalDesign from './ModalDesign';

export default function Main({Content}) {
    return (
        <div>
            {Content.map((content) => 
                <ModalDesign 
                    key={content.id}
                    content={content}
                />
                )}
        </div>
    )
}
