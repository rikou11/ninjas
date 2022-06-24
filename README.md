This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Chap 1

[]: add file in the root called .babelrc
{
"presets": ["next/babel"],
"plugins": []
}
[]: change the content of the file called .eslintrc.json
{
"extends": ["next/babel", "next/core-web-vitals"]
}

## Chap 2

[pages]
the important , is where you can write your html code
[pages/index.js] is the main page but as [REACTjs] the file is called [pages/_app.js]
is where you can put your Layout (NAvBAr and Footer)

## chap 3

[] Error 404 pages
[]add a file called [pages/404.js]

[]to redirect user after the page Err 404 after certain amount of time
import useEffectt from 'react'
[]and
import useRouter from 'next/router'

[]
const router = useRouter();
useEffect(() => {

        setTimeout(() => {

            //  this methode can redirect to the previous page
            // router.back();
            router.push("/");
        }, 3000);
    }, []);

## Chap 4

[] to add pages to your project you need just add new files with a different
[] Exemple [pages/About.js]

[]you can also add folder so it ll be added to your project
[] Exemple [pages/ninjas/index.js]

## Chap 5

[] Snipets is important because you can easily create new functions
[] exemple : nafe...

## Chap 6

[] Navigation between pages
[] import Link from 'next/link'

 <Link href="/about"><a>About</a></Link>

[Note]

<!-- ! Don't let any spaces between Link and the Tag  -->
<!-- * now you can easily navigate between pages-->

## Chap 7

[]to add image to your page using
[]import Image from 'next/image'
[]<Image src="/logo.png" alt="My image" height={200} width={200} />
[Note]

<!--? /logo.png you need to place your image in the [public] folder -->

## Chap 8

CSS Module
[] import styles from ./Home.module.css
[] How to use it ?

 <div class={styles.container}></div> //so you need styles+ name of the class in the module files
[] this methode generate a unique class names for the tag elements

## Chap 9

[] Fetching data from Api

[] create a function called

export const getStaticProps = async () => {
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await res.json();
return {
props: {
ninjas: data
}
}
}

[] then add the data as props in the function

const Ninjas = ({ ninjas }) => {...}

## Chap 10

products unique link
[] [ninjas/:id]
[] create in the folder that you want [[id].js]

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
