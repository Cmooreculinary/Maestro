# HEADMASTER

HEADMASTER is a mobile-first PWA and tablet command platform for Christian school leadership. The first delivery builds a typed frontend shell and mock Vault data layer behind interfaces, with a thin FastAPI service for same-origin deployment.

## Local development

```bash
cd frontend && npm install && npm run dev
```

```bash
python -m venv .venv
. .venv/bin/activate
pip install -r backend/requirements.txt
uvicorn backend.main:app --reload
```

The Vite server proxies `/api` to port 8000. Production builds are served by FastAPI from `frontend/dist`.

## Delivery phases

See [`STATE.md`](STATE.md) for the active checkpoint and [`DEPLOY.md`](DEPLOY.md) for deployment requirements.
