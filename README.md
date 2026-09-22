# My Personal Production Platform

This repository contains my personal production platform, a full-stack portfolio application that will be developed and operated throughout the senior capstone.

## Current Status

The initial repository structure and Git/GitHub development workflow have been established.

The frontend, backend, database, deployment environments, and other production capabilities will be added incrementally during the course.

## Repository Structure

- `frontend/` — React frontend
- `backend/` — application backend
- `docs/` — engineering and production documentation
- `requirements/` — cimplementation requirements and completion evidence for production-platform capabilities

## Development Workflow

Development is performed from WSL/Linux.

Changes are developed on focused branches and merged into protected `main` through pull requests.

## Engineering Conventions

Project conventions are documented in:

`docs/style-guide.md`

# Frontend
This directory contains the React and TypeScript frontend for the production platform.
The frontend uses Vite for local development and production builds. Production builds create static files in `dist/` for deployment.
## Requirements
* Node.js
* npm
## Install Dependencies
From the `frontend/` directory:
```bash
npm install
```
## Run Locally
```bash
npm run dev
```
Vite starts a local development server and prints the local URL in the terminal.
## Lint
```bash
npm run lint
```
## Build for Production
```bash
npm run build
```
The production build is created in `frontend/dist/`.