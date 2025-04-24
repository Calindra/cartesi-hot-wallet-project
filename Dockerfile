FROM denoland/deno:alpine-1.43.6

EXPOSE 8080

WORKDIR /app

COPY . .

CMD ["run", "--allow-net", "--allow-read", "--allow-env", "server.ts"]
