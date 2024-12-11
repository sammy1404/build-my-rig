

import puppeteer, { Page } from 'puppeteer';

export interface Product {
    title: string;
    price: string;
    image: string | undefined;
    link: string | undefined;
}


async function fetchSearch(searchTerm: string) {
    searchTerm = searchTerm.split(' ').join('+');
    // const newURL = `https://www.pcstudio.in/product-category/${searchTerm}`
    const newURL = `https://www.pcstudio.in/?s=${searchTerm}&post_type=product&dgwt_wcas=1`

    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(newURL);

    await autoScroll(page);

    const products: Product[] = await page.evaluate(() => {
        const items = Array.from(document.querySelectorAll('.woo-entry-inner'));
        return items.map(item => ({
            title: item.querySelector('.title a span')?.getAttribute('title') || 
                   item.querySelector('.title a span') || 
                   item.querySelector('.title a')?.textContent,
            price: item.querySelector('.price ins .woocommerce-Price-amount')?.textContent?.trim(),
            image: item.querySelector('.woo-entry-image-main')?.getAttribute('src'),
            link: item.querySelector('.woocommerce-LoopProduct-link')?.getAttribute('href'),

        })) as Product[];
    });

    await browser.close();
    console.log(products)
    /*
    next: {
        revalidate: 60*60*24
    }*/
    return products;
}

async function autoScroll(page: Page) {
    await page.evaluate(async () => {
        await new Promise<void>((resolve) => {
            const distance = 1000;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                if (window.scrollY + window.innerHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100); // Reduced the interval to 50ms for faster scrolling
        });
    });
}


export default fetchSearch
