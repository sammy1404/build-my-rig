import axios from 'axios';
import { load } from 'cheerio';

export interface Product {
    title: string;
    price: string;
    image: string | undefined;
    link: string | undefined;
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
            const link = $(this).find('.woocommerce-LoopProduct-link').attr('href');

            products.push({
                title,
                price,
                image,  
                link,
            });
        });

        return products;
    } catch (error) {
        console.error(error);
        return [{ title: 'Error', price: 'N/A', image: 'placeholder-image-url' }, { title: 'No Results', price: 'N/A', image: 'placeholder-image-url' }]; // returning an array with various values assigned as null
    }
}


export default fetchSearch