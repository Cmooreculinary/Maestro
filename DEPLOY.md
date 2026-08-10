# Deployment

## Render (canonical)

Use **New → Blueprint** and select `backend/render.yaml`. A service created manually in the dashboard does not consume later Blueprint changes automatically.

Before deployment:

1. Verify the selected branch and current commit SHA.
2. Add secrets in Render, never in the Blueprint or repository.
3. Clear the build cache after dependency changes.
4. Confirm `VAULT_ADAPTER` and any adapter credentials.
5. Confirm `/api/health` returns `{"status":"ok"}` after deploy.

The Blueprint builds the frontend and launches FastAPI, which serves both `/api/*` and the SPA from one origin.

## Vercel preview

For a frontend-only preview, set the project root to `frontend`, use `npm run build`, publish `dist`, and set `VITE_API_URL` to the preview API origin. This is not the production topology.
