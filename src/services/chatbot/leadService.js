export async function submitLead(payload) {
  try {
    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return true;
  } catch (error) {
    console.warn('Chatbot lead submission failed', error);
    return false;
  }
}
