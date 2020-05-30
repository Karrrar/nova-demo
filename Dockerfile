FROM node as builder
WORKDIR /app
COPY . .
RUN yarn run build

FROM node
RUN yarn global add serve
COPY --from=builder /app/build .

CMD ["serve", "-p", "80", "-s", "."]
