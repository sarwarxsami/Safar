# Stage 1: Build dependencies
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY schema.sql /docker-entrypoint-initdb.d/
COPY . .

# If you have React frontend build step (optional)
# RUN npm run build


# Stage 2: Production runtime (smaller image)
FROM node:20-slim

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "server/server.js"]