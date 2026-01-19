import { FeedbackSubmission } from "../types";

/**
 * Handles the submission of user feedback.
 * 
 * CURRENTLY: Simulates an API call and logs to console.
 * TO DO: Replace the simulation with a real fetch call to your backend, 
 * Formspree, EmailJS, or Supabase.
 */
export const submitFeedback = async (data: FeedbackSubmission): Promise<boolean> => {
  // 1. Log to console (so you can see it in Developer Tools)
  console.group("📝 New Feedback Submission");
  console.log("Tool Name:", data.toolName);
  console.log("URL:", data.toolUrl);
  console.log("Description:", data.description);
  console.log("Time:", new Date(data.timestamp).toLocaleString());
  console.groupEnd();

  // 2. REAL BACKEND INTEGRATION EXAMPLE:
  /*
  try {
    const response = await fetch('https://api.your-backend.com/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Network error');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
  */

  // 3. Simulate Network Delay (1.5s)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

/**
 * Generates a mailto link for manual submission via email client
 */
export const generateEmailLink = (data: FeedbackSubmission, receiverEmail: string = "aiscrapyard.com@gmail.com") => {
  const subject = encodeURIComponent(`[AI Nexus] New Tool Suggestion: ${data.toolName}`);
  const body = encodeURIComponent(
`Hi,

I would like to suggest a new tool for AI Nexus:

- Name: ${data.toolName}
- URL: ${data.toolUrl || "N/A"}
- Description: ${data.description}

Submitted at: ${new Date(data.timestamp).toLocaleString()}
`
  );

  return `mailto:${receiverEmail}?subject=${subject}&body=${body}`;
};