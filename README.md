LDCode — AI-Powered Course Generator

A mobile app (built with Expo / React Native) that automatically generates learning courses from a user's natural-language request, using a two-step AI generation pipeline powered by Google Gemini.

What it does
User input — the user describes what they want to learn (e.g. "a beginner course on JavaScript closures").
Outline generation — the request is combined with a custom prompt template and sent to the Gemini API to produce a structured course outline (modules/lessons).
Lesson detail generation — each outline item is then expanded into full lesson content via a second Gemini call, using a separate prompt tailored for detailed generation.
Result — the user gets a complete, structured course generated end-to-end from a single request.
Why a two-step pipeline instead of one call

Generating an entire course in a single prompt tends to produce shallow or inconsistent content. Splitting generation into outline → detail keeps each Gemini call focused on one job, giving more structured and reliable output — this is the same principle behind multi-step LLM orchestration used in production AI applications.

Prompt engineering

Prompts are kept in a dedicated template file, separate from application logic. At request time, the app merges the base template with the user's specific request before calling the Gemini API. Keeping templates isolated from business logic makes them easier to iterate on and version without touching app code.

Tech stack
Framework: Expo / React Native
Language: TypeScript / JavaScript
AI provider: Google Gemini API
Auth/Backend services: Firebase
Project status

This is a personal project and a work in progress. Course generation works end-to-end, but some features are still incomplete or have known issues. Current focus areas:

 Improve error handling for failed/partial Gemini responses
 Add content validation before displaying generated lessons
 Polish UI for the course generation flow
 (Planned) Add feedback loop to let users regenerate/refine specific lessons
Getting started
bash
npm install
npx expo start

This project uses file-based routing via Expo Router.
