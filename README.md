## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers))
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site

## Potential future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair

the Add post button had a hover effect but login didn't. I added it to the login to make the styling more consistent

## The link to my GitHub repo: https://github.com/Adlam4002/didit-reddit-upvote-example

## The link to my deployed app: https://didit-reddit-upvote-example-ten.vercel.app

# Reflection

The first thing I did in this week’s project was to fork the repo. I then created an app in OAuth. This allowed me to use it later in the project. I then used the provided database schema to produce tables on Supabase so data could be stored and retrieved. I then tried to deploy the site to Vercel. There were errors that I had to fix. Based on the errors I thought it was the environment variables not being on the Vercel deployment. I then added the env variables to the deployment and it was successful.

I then set about changing the metadata of the posts pages. I decided to use the post title as the title for the tab as that’s the data most suitable. To do this I used the generateMetadata function. Inside the function I selected the post data from the database and then utilising that data I returned a metadata object.

If a non-signed-in user tries to vote on a post an error is thrown. This is not very user-friendly so I decided instead I would make an error page. On this page, the user is presented with a message explaining what has happened and they can click try again to reset the page., rather than being stuck on an error.

I was going to add a page for the user to view all the posts they had made but due to time constraints, I did not complete this.

The website had two buttons that were styled similarly but only one had a hover effect. I didn’t like this inconsistency, so I added the hover effect to both and used the same styling for the button on my error page.
