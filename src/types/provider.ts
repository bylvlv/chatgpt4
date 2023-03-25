import type { ConversationMessage, ConversationType } from './conversation'

export interface Provider {
  id: string
  /** Name of provider */
  name: string
  /** Global settings of the provider */
  platformSettings?: SettingsUI[]
  /** Settings for each conversation */
  conversationSettings?: SettingsUI[]
  supportConversationType: ConversationType[]
  /** Handle a prompt in single conversation type */
  handleSinglePrompt?: (prompt: string) => Promise<PromptResponse>
  /** Handle a prompt in continuous conversation type */
  handleContinuousPrompt?: (messages: ConversationMessage[]) => Promise<PromptResponse>
  /** Handle a prompt in image conversation type */
  handleImagePrompt?: (prompt: string) => Promise<PromptResponse>
}

// TODO: Support stream response
export type PromptResponse = string | null | undefined

interface SettingsUIBase {
  name: string
  description?: string
}

interface SettingsUIInput extends SettingsUIBase {
  type: 'input'
}

interface SettingsUISelect extends SettingsUIBase {
  type: 'select'
  options: string[]
}

export type SettingsUI = SettingsUIInput | SettingsUISelect
