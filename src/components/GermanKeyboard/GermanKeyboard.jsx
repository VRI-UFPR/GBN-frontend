import React, { useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

export default function GermanKeyboard({ textArea, setInput, focusArea }) {
    const [layoutName, setLayoutName] = useState("default");

    const handleKeyPress = (button, e) => {
        if (!e || e.button === 2) return;
        
        e.preventDefault();
        focusArea();
        
        focusArea();
        if (button === "{shift}" || button === "{lock}") handleShift();
        else if (button === "{bksp}") {
            textArea.current.value = textArea.current.value.slice(0, -1);
            setInput(textArea.current.value);
        } else{
            textArea.current.value += button;
            setInput(textArea.current.value);
        }
    };

    const handleShift = () => {
        setLayoutName(layoutName === "default" ? "shift" : "default");
    };

    return (
        <div>
            {/* Render the Keyboard component */}
            <Keyboard
                onKeyPress={handleKeyPress}
                layoutName={layoutName}
                layout={{
                    default: [
                        "\u00F6 \u00FC {bksp}",
                        "\u00E4 \u00DF \u017F",
                        "{lock}"
                    ],
                    shift: [
                        "\u00D6 \u00DC {bksp}",
                        "\u00C4 \u1E9E \u0053",
                        "{lock}"
                    ]
                }}
            />
        </div>
    );
}
