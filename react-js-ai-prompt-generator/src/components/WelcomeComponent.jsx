import { useState } from "react";

export default function WelcomeComponent() {
    const [prompt, setPrompt] = useState("Can you list [number] ways to [achieve specific goal]? Please include a short description for each.");
    const [fields, setFields] = useState([]);
    const [finalText, setFinalText] = useState("");
    const [copySuccess, setCopySuccess] = useState(false);

    // Handle input change for the main prompt
    function handlePromptChange(event) {
        setPrompt(event.target.value);
    }

    // Extract placeholders and create input fields
    function handleSubmit() {
        const matches = prompt.match(/\[([^\]]+)\]/g) || [];
        const extractedFields = matches.map((match) => ({
            label: match.replace(/\[|\]/g, ""), // Remove brackets
            value: "",
        }));

        setFields(extractedFields);
        setFinalText(""); // Reset final text when resubmitting
    }

    // Update input field values dynamically
    function handleFieldChange(index, event) {
        const newFields = [...fields];
        newFields[index].value = event.target.value;
        setFields(newFields);
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
        <div className="Welcome">
            <h1>Welcome to Chatgpt Prompt Generator</h1>

            {/* Main Prompt Input */}
            <div>
                <label>Prompt:</label>
                <input type="text" value={prompt} onChange={handlePromptChange} />
            </div>

            {/* Generate Input Fields */}
            <div>
                <button type="button" onClick={handleSubmit}>Get Prompt</button>
            </div>

            {/* Dynamic Input Fields */}
            {fields.length > 0 && (
                <div>
                    <h2>Fill in the details:</h2>
                    {fields.map((field, index) => (
                        <div key={index}>
                            <label>{field.label}:</label>
                            <input
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
                    <h2>Final Text:</h2>
                    <p>{finalText}</p>
                    <button type="button" onClick={handleCopyText}>Copy to Clipboard</button>
                    {copySuccess && <span style={{ color: "green", marginLeft: "10px" }}>Copied!</span>}
                </div>
            )}
        </div>
    );
}
