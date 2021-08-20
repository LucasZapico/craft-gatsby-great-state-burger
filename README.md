# Headless Craft CMS with Gatsby 

## Craft Setup

For convenience a the root of this project is both a craft back up and a dump of the psql database associated with the project. 

Restore the database with;

```shell
psql --set ON_ERROR_STOP=on dbname < infile
```

```shell
psql --host=127.0.0.1 --port=5444 --username=root --dbname=craft-gatsby-test-2 --file=./craft-gatsby-test-2.db
```


## Gatsby Setup

__If Gatsby set up on machine__

[Getting Started with Gatsby CLI install](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)

1. Navigate to `gatsby-craft-t2` 

```shell
cd gatsby-craft-t2 

```

2. Install packages 

```shell 
npm install
```

3. Start or Build Gatsby Site

```shell 
npm start or gatsby develop
```