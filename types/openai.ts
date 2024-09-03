import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  url: string;
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
  sysPrompt: string;
  prefixPrompt: string;
  suffixPrompt: string;
}

export enum OpenAIModelID {
  Llama = 'L3-8B-Lunar-Stheno.Q6_K.gguf',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.Llama;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.Llama]: {
    url: '/completion',
    id: OpenAIModelID.Llama,
    name: 'L3-8B-Lunar-Stheno.Q6_K.gguf',
    sysPrompt: '<|start_header_id|>{role}<|end_header_id|>',
    prefixPrompt: '<|begin_of_text|>{{ user_message }}\n',
    suffixPrompt: '\n\n### Assistant:\n',
    maxLength: 10000000,
    tokenLimit: 10000000,
  },
 
};
