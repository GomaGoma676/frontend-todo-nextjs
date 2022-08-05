

### Project setup

```bash
# create nextjs project
$ npx create-next-app todo-nextjs --ts
# install prisma
$ yarn add -D prisma
$ npx prisma init
$ yarn add @prisma/client
```
Edit DATABASE_URL of .env for postgres container 
```bash
# introspect from existing DB
$ npx prisma db pull
$ npx prisma generate
# setup tailwind css
$ yarn add -D tailwindcss postcss autoprefixer
$ yarn add -D prettier prettier-plugin-tailwindcss
$ npx tailwindcss init -p
```
* [Tailwind CSS Nextjs](https://tailwindcss.com/docs/guides/nextjs) 
* [Mantine UI Nextjs](https://mantine.dev/guides/next/) 
```bash
# install necessary packages
$ yarn add @tanstack/react-query@4.0.10 @tanstack/react-query-devtools@4.0.10
$ yarn add @mantine/core@5.0.2 @mantine/hooks@5.0.2 @mantine/form@5.0.2 @mantine/next@5.0.2 @emotion/server@11.10.0 @emotion/react@11.10.0
$ yarn add @heroicons/react@1.0.6 @tabler/icons@1.78.1 yup@0.32.11 axios@0.27.2 zustand@4.0.0
```
