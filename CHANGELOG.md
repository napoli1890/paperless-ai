# Changelog

All notable changes to this fork will be documented in this file. This project adheres to a custom versioning schema based on the original `paperless-ai` core.

## [3.0.9-1890.1.0.1] - 2026-02-11

### Added
- **Dynamic Tag Coloring:** Implemented automatic random HEX color generation for newly created tags to improve visual organization in Paperless-ngx.
- **Single Source of Truth (SSOT) Versioning:** The application now dynamically reads its version from a root `VERSION` file, synchronizing the internal UI/logs with Docker tags.
- **Automated CI/CD Pipeline:** Added GitHub Actions for automated Docker builds. Supports multi-architecture images (`amd64`, `arm64`) and dual tagging (`latest` and version-specific).
- **Branding:** Updated project identity with the "Rainbow Leaf" icon.

### Changed
- **System Prompt Optimization:** Refined the AI prompt for Llama 3.1 (Groq/OpenAI compatible) to ensure strict JSON output and better handling of multi-language documents.
- **Docker Workflow:** Shifted from static image pulling to local build context (`build: .`) in `docker-compose.yml` to ensure fork-specific changes are applied.

### Fixed

### Removed
- **Repo Cleanup:** Removed local SQLite databases (`.db`), log files, and sensitive `.env` files from the public repository history.

---

## [3.0.9-1890.1.0.0] - 2026-02-09

### Initial Fork
- Forked from `clusterzx/paperless-ai` (v3.0.9).
- Basic environment setup for Raspberry Pi deployment.

### Fixed
- **API Compatibility:** Resolved issues with custom OpenAI-compatible endpoints (Groq, etc.) that were causing parsing errors in the original core.