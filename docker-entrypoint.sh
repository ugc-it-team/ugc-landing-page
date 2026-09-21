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

# Sale en cuanto cualquiera de los dos muera.
#
# Nada de `wait -n "$pid" ...`: el ash de BusyBox acepta los argumentos pero entonces
# espera a TODOS, así que la caída de Node pasaba desapercibida y nginx seguía sirviendo
# 502 con el healthcheck en verde. Sondear es feo pero es inequívoco y portable.
while kill -0 "$node_pid" 2>/dev/null && kill -0 "$nginx_pid" 2>/dev/null; do
  sleep 2
done

if ! kill -0 "$node_pid" 2>/dev/null; then
  echo "entrypoint: el proceso de Next murió; tumbando el contenedor" >&2
else
  echo "entrypoint: nginx murió; tumbando el contenedor" >&2
fi

term
exit 1
