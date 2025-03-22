export default function GetPromptComponent() {
  const promptTemplates = [
      {
          category: "Normal Templates",
          prompts: [
              { title: "Summarization Prompt", text: "Can you provide a brief summary of [topic or text]? Please highlight the key points in bullet form." },
              { title: "List Generation Prompt", text: "Can you list [number] ways to [achieve specific goal or solution to problem]? Please include a short description for each." },
              { title: "Comparison Prompt", text: "What are the key differences/similarities between [concept A] and [concept B]? Please present the information in a table format." },
              { title: "Explainer Prompt", text: "Can you explain [complex topic] in simple terms? Please use analogies or examples that make it easy to understand." },
              { title: "Idea Brainstorming Prompt", text: "Can you brainstorm [number] ideas for [specific project or topic]? Include a short description for each idea." },
              { title: "Template Request Prompt", text: "Can you provide a template for [specific type of document, such as a business email, proposal, etc.]? Please include the key elements to include." },
              { title: "How-To Guide Prompt", text: "Can you provide a step-by-step guide on how to [specific task or procedure]? Please number the steps for clarity." }
          ]
      },
      {
          category: "Job Prompts",
          prompts: [
              { title: "Tailoring Your Resume", text: "Could you modify my resume to align with the [Job Title] role at [Company]? Refer to the job description [Paste Job Description] and my resume [Paste Resume]." },
              { title: "Crafting a Professional Summary", text: "Based on my resume, create a professional summary tailored to the [Job Title]. [Paste Resume]" },
              { title: "Decoding Job Descriptions", text: "Enumerate the primary responsibilities for [Job Title]. List the top three requirements from the job description [Paste Job Description]." },
              { title: "Enhancing Resume Bullets", text: "Revise this resume bullet point using clear and impactful language, emphasizing my accomplishments. [Paste Resume]" },
              { title: "LinkedIn Summary Creation", text: "Compose a LinkedIn summary using details from my resume [Paste Resume]." },
              { title: "Job Applications with ChatGPT", text: "Identify my [Skills] expertise from my resume [Paste Resume]. Describe it conversationally and clearly, as if I were speaking." },
              { title: "Personalized Cover Letter", text: "Draft a personalized cover letter for the [Job Title] position at [Company]. Include the job description [Paste Job Description] and my current resume [Paste Resume]." },
              { title: "Interview Preparation", text: "What skills and experiences should I emphasize during an interview for the [Job Title] role in [Specific Industry]?" },
              { title: "Common Interview Questions", text: "List the top 10 questions commonly asked during interviews for a(n) [Job Title] position." }
          ]
      }
  ];
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => alert("Copied to clipboard!"))
        .catch(err => console.error("Error copying text: ", err));
  };

  return (
      <div className="GetPromptComponent">

          {promptTemplates.map((section, index) => (
              <div key={index}>
                  <h2>{section.category}</h2>
                  
                  {section.prompts.map((prompt, idx) => (
                      <div key={idx} className="prompt-card">
                          <h3>{prompt.title}</h3>
                          <p>{prompt.text}</p>
                          <button className="copy-button" onClick={() => copyToClipboard(prompt.text)}>Copy</button>
                      </div>
                  ))}
              </div>
          ))}
      </div>
  );
}
