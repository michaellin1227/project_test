## Install

1. clone project

```bash
git clone https://github.com/michaellin1227/project_test.git
```

2. Navigate into your site’s directory

```bash
cd YOUR_PATH/project_test
```

3. install dependency

```bash
yarn
```

## Run project

1. create `.env` file under `/` and put environment variable inside
    - `.env.development`：use for `yarn develop`
    - `.env.production` : use for `yarn build`

```
.
├── node_modules
├── src
├── .env.development
├── .env.production

```

2. start developing

```bash
yarn develop

// site will run at localhost:8000
```

3. build production environment

```bash
yarn build 
yarn serve

// site will run at localhost:9000
```


## Environment Variables

```bash
SITE_URL=# 網站Url
```

## Gatsby v5

https://v5.gatsbyjs.com/docs/

