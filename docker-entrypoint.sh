#!/bin/sh
set -eu

# El proveedor (Cloud Run / Railway) inyecta PORT; nginx escucha ahí, igual que antes.
: "${PORT:=8080}"
: "${NEXT_PORT:=3000}"

mkdir -p /tmp/nginx
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /tmp/nginx/nginx.conf

# Si Node se cae, nginx seguiría vivo devolviendo 502 y el healthcheck del proveedor
# lo daría por sano. Matar el contenedor entero es lo correcto: que lo reinicien.
term() {
  kill -TERM "${node_pid:-}" "${nginx_pid:-}" 2>/dev/null || true
}
trap term TERM INT

PORT="$NEXT_PORT" node server.js &
node_pid=$!

nginx -c /tmp/nginx/nginx.conf &
nginx_pid=$!

# Sale en cuanto cualquiera de los dos muera, con su código de salida.
wait -n "$node_pid" "$nginx_pid"
code=$?
term
exit "$code"
