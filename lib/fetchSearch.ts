import axios from 'axios';
import { load } from 'cheerio';

interface Product {
    title: string;
    price: string;
    image: string | undefined;
}


async function fetchSearch(searchTerm: string) {
    const newURL = `https://www.pcstudio.in/product-category/${searchTerm}`
    
    try {
        const response = await axios(newURL);
        const html = response.data;
        const $ = load(html);

        const products: Product[] = [];

        $('.woo-entry-inner', html).each(function() {
            const title = $(this).find('.title a span').attr('title') || $(this).find('.title a span').text();
            const price = $(this).find('.price ins .woocommerce-Price-amount').text().trim();
            const image = $(this).find('.woo-entry-image-main').attr('src');

            products.push({
                title,
                price,
                image
            });
        });

        return products;
    } catch (error) {
        console.error(error);
        return [];
    }
}


export default fetchSearch