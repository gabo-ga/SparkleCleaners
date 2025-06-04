
FROM node:18-alpine AS builder


WORKDIR /app


COPY package.json ./
COPY package-lock.json ./

# Instalar solo dependencias 
RUN npm ci

COPY . .

RUN npm run build

# ───────────────────────────────────────
# ETAPA 2: "runner" (producción)
# ───────────────────────────────────────
FROM node:18-alpine AS runner

# 1. Definir que trabajaremos en modo "producción"
ENV NODE_ENV=production

# 2. Crear carpeta de trabajo en la etapa de producción
WORKDIR /app


COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json


RUN npm ci --omit=dev

# 5. Exponer el puerto en el que Next.js escuchará
EXPOSE 3000

# 6. Comando para arrancar Next.js en producción
CMD ["npm", "run", "start"]
