FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
# standalone no copia estas dos carpetas; sin esto el sitio arranca sin estilos ni imágenes.
RUN cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/

FROM node:22-alpine AS runner
WORKDIR /app
RUN apk add --no-cache nginx gettext \
  && addgroup -g 1001 -S nodejs \
  && adduser -u 1001 -S nextjs -G nodejs \
  # nginx abre su error_log compilado por defecto antes de leer la config, y como
  # usuario no-root falla con un alert en el arranque. /var/lib/nginx/logs es un
  # symlink a /var/log/nginx, que es el que hay que poder escribir.
  && mkdir -p /var/log/nginx \
  && chown -R nextjs:nodejs /var/lib/nginx /var/log/nginx

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# El server.js de standalone escucha en localhost por defecto; nginx le habla por loopback.
ENV HOSTNAME=127.0.0.1
ENV NEXT_PORT=3000
# Mismo contrato que la imagen anterior: el proveedor inyecta PORT y nginx escucha ahí.
ENV PORT=8080

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

USER nextjs
EXPOSE 8080
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
