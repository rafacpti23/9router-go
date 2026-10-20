// Maps dashboard catalog aliases to the actual IDs returned by Antigravity's
// fetchAvailableModels endpoint.
const backendIDs: Record<string, string> = {
  'gemini-default': 'gemini-3.8-flash-medium',
  'gemini-3.5-flash': 'gemini-3.8-flash-medium',
  'gemini-3.5-flash-high': 'gemini-3.8-flash-high',
  'gemini-3.5-flash-medium': 'gemini-3.8-flash-medium',
  'gemini-3.5-flash-low': 'gemini-3.8-flash-low',
  'gemini-3.5-flash-extra-low': 'gemini-3.8-flash-low',
  'gemini-3-flash-agent': 'gemini-3.8-flash-high',
  'gemini-3-flash': 'gemini-3.8-flash-high',
  'gemini-3.1-pro-high': 'gemini-pro-agent',
  'gemini-3.1-pro': 'gemini-pro-agent',
  'gemini-3-pro-high': 'gemini-pro-agent',
  'gemini-3-pro-low': 'gemini-3.1-pro-low',
  'gemini-3.8-flash': 'gemini-3.8-flash-medium',
  'gemini-3.8-flash-agent': 'gemini-3.8-flash-high',
  'gemini-3.8-flash-thinking': 'gemini-3.8-flash-high',
  'gemini-3.7-flash': 'gemini-3.7-flash-tiered',
  'gemini-3.7-flash-high': 'gemini-3.7-flash-tiered',
  'gemini-3.7-flash-agent': 'gemini-3.7-flash-tiered',
  'gemini-3.7-flash-medium': 'gemini-3.7-flash-tiered',
  'gemini-3.7-flash-low': 'gemini-3.7-flash-tiered',
  'gemini-3.7-flash-extra-low': 'gemini-3.7-flash-tiered',
  'gemini-3.7-flash-thinking': 'gemini-3.7-flash-tiered',
  'gemini-3.6-flash': 'gemini-3.6-flash-tiered',
  'gemini-3.6-flash-high': 'gemini-3.6-flash-tiered',
  'gemini-3.6-flash-medium': 'gemini-3.6-flash-tiered',
  'gemini-3.6-flash-low': 'gemini-3.6-flash-tiered',
}

export function antigravityBackendModelID(modelId: string): string {
  const base = modelId.trim().toLowerCase().replace(/\([^)]*\)$/, '').trim()
  return backendIDs[base] || base
}
