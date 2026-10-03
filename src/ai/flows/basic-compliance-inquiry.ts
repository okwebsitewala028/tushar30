'use server';
/**
 * @fileOverview An AI agent that provides generalized, educational responses to basic ICAI compliance or common tax concept questions.
 *
 * - basicComplianceInquiry - A function that handles the compliance inquiry process.
 * - BasicComplianceInquiryInput - The input type for the basicComplianceInquiry function.
 * - BasicComplianceInquiryOutput - The return type for the basicComplianceInquiry function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const BasicComplianceInquiryInputSchema = z.object({
  question: z
    .string()
    .describe(
      'The user\'s question about ICAI compliance or common tax concepts.'
    ),
});
export type BasicComplianceInquiryInput = z.infer<
  typeof BasicComplianceInquiryInputSchema
>;

const BasicComplianceInquiryOutputSchema = z.object({
  response: z
    .string()
    .describe(
      'A generalized, educational response to the question, including a clear disclaimer.'
    ),
});
export type BasicComplianceInquiryOutput = z.infer<
  typeof BasicComplianceInquiryOutputSchema
>;

export async function basicComplianceInquiry(
  input: BasicComplianceInquiryInput
): Promise<BasicComplianceInquiryOutput> {
  try {
    return await basicComplianceInquiryFlow(input);
  } catch (error) {
    console.error('Error in basicComplianceInquiry:', error);
    throw error;
  }
}

const prompt = ai.definePrompt({
  name: 'basicComplianceInquiryPrompt',
  input: { schema: BasicComplianceInquiryInputSchema },
  output: { schema: BasicComplianceInquiryOutputSchema },
  prompt: `You are an AI assistant designed to provide generalized, educational information about ICAI compliance and common tax concepts. Your responses should be informative and helpful for understanding the topics, but always general in nature. It is imperative that you include a disclaimer stating that your responses are for educational purposes only and do not constitute legal, financial, or professional advice. Users should consult with a qualified professional for specific situations.

Based on the following question: {{{question}}}, provide a comprehensive and educational answer.`,
});

const basicComplianceInquiryFlow = ai.defineFlow(
  {
    name: 'basicComplianceInquiryFlow',
    inputSchema: BasicComplianceInquiryInputSchema,
    outputSchema: BasicComplianceInquiryOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await prompt(input);
      return output!;
    } catch (error) {
      console.error('Error in basicComplianceInquiryFlow:', error);
      throw error;
    }
  }
);
