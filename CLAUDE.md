# HEADMASTER project instructions

- Build production-quality, typed, tested code in the documented phase order.
- Never push, delete destructively, or place secrets in source control.
- Keep persistence behind `frontend/src/vault/`; components must not make scattered data calls.
- Enforce `OPERATIONAL`, `STRATEGIC`, `PASTORAL`, and `SUCCESSION` data scopes. Pastoral and succession data must never enter operational or board exports.
- Reserve Deep Gold for pastoral-scope UI. Use the Trench tokens from `frontend/src/theme/tokens.ts`.
- Scan every checkpoint for forbidden third-party scaffolding or branding and record the result in `PURGE_LOG.md`.
- Deploy the single-origin service through the Render Blueprint in `backend/render.yaml`.
- Update `STATE.md`, test the phase acceptance criteria, and make a checkpoint commit after each phase.
