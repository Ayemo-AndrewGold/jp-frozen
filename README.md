# JP Frozen

Monorepo for JP Frozen storefront and backend services.

## Project Structure

```
jp-frozen/
├── jp-frontend/     # Next.js storefront application
└── jp-backend/      # Backend API services
```

## Getting Started

### Frontend
```bash
cd jp-frontend
npm install
npm run dev
```

### Backend
```bash
cd jp-backend
# Setup instructions to be added
```

## Environment Variables

Create `.env.local` files in respective directories with required configuration.
**Never commit .env files to version control.**

## Security

- All sensitive data (API keys, secrets, credentials) are gitignored
- Environment variables are never committed
- Database files are excluded from version control
