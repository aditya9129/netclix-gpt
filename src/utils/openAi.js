import OpenAI from 'openai';
import { open_ai_key } from './constants';

const openai = new OpenAI({
  apiKey: "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", // This is the default and can be omitted
  dangerouslyAllowBrowser:true,
});
export default openai;