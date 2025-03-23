import { useState } from "react";
import './css/MyCustom.css';

export default function GeneratePromptComponent() {
    const [prompt, setPrompt] = useState("Can you list [number] ways to [achieve specific goal]? Please include a short description for each.");
    
    const [fields, setFields] = useState([]);
    const [finalText, setFinalText] = useState("");
    const [copySuccess, setCopySuccess] = useState(false);

    // Handle input change for the main prompt
    function handlePromptChange(event) {
        setPrompt(event.target.value);

        // Reset the Values of "Copy" & "FinalText" to Initial before Resubmitting
        setCopySuccess(false);
        setFinalText("");
    }

    // Extract placeholders and create input fields
    function handleSubmit() {
        const matches = prompt.match(/\[([^\]]+)\]/g) || [];
        const extractedFields = matches.map((myStr) => ({
            label: myStr.replace(/\[|\]/g, ""), // Remove brackets
            value: "",
        }));

        setFields(extractedFields);
    }

    // Update input field values dynamically
    function handleFieldChange(index, event) {
        const newFields = [...fields];
        newFields[index].value = event.target.value;
        setFields(newFields);

        // Reset the Values of "Copy" & "FinalText" to Initial before Resubmitting
        setCopySuccess(false);
        setFinalText("");
    }

    // Replace placeholders in prompt with user inputs
    function handleGenerateText() {
        let modifiedText = prompt;
        fields.forEach(field => {
            modifiedText = modifiedText.replace(`[${field.label}]`, field.value);
        });
        setFinalText(modifiedText);
    }

    function handleCopyText() {
        if (finalText) {
            navigator.clipboard.writeText(finalText)
                .then(() => setCopySuccess(true))
                .catch(err => console.error("Failed to copy: ", err));
        }
    }

    return (
        <div className="prompt-card">
            <h1>Welcome to Chatgpt Prompt Generator</h1>

            {/* Main Prompt Input */}
            <div>
                <label>Prompt:</label>
                <textarea type="text" value={prompt} onChange={handlePromptChange} />
            </div>

            {/* Generate Input Fields */}
            <div>
                <button type="button" onClick={handleSubmit}>Get Prompt</button>
            </div>

            {/* Dynamic Input Fields */}
            {fields.length > 0 && (
                <div>
                    <h2 className="mt-4">Fill in the details:</h2>
                    {fields.map((field, index) => (
                        <div key={index}>
                            <label>{field.label}:</label>
                            <textarea
                                type="text"
                                value={field.value}
                                onChange={(e) => handleFieldChange(index, e)}
                            />
                        </div>
                    ))}

                    {/* Button to replace placeholders */}
                    <button type="button" onClick={handleGenerateText}>Generate Final Text</button>

                </div>
            )}

            {/* Final Output */}
            {finalText && (
                <div>
                    <h2 className="mt-4">Final Text:</h2>
                    <p>{finalText}</p>
                    <button type="button" onClick={handleCopyText}>Copy to Clipboard</button>
                    {copySuccess && <span style={{ color: "green", marginLeft: "10px" }}>Copied!</span>}
                </div>
            )}
        </div>
    );
}
