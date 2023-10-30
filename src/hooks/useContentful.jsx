import { createClient } from 'contentful';

const useContentful = () => {
    // We need the space_id and the access_token for the api

    // We are useing the createClient package to create a client using the authentication for contentful via the acces token and space id
    const client = createClient({
        space: 'mj1qk0t1w931',
        accessToken: 'LG5CUAahUAt9qqEvlP-grSEmruoc9LLABQpHT_ghc74',
        host: 'preview.contentful.com'
    });

    const getGuitars = async () => {
        try{
            // getEntries is a method from the client that returns all the entries from the contentful space
            // https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/
            const entries = await client.getEntries({
                content_type: 'guitars',
                select: 'fields'
            });

            // We are sanitizing the data from the entries to only get the fields we need
            const sanitizedEntries = entries.items.map((entry) => {
                const brand = entry.fields.brand
                const description = entry.fields.description
                const img = entry.fields.img.fields.file.url

                return {
                    brand,
                    description,
                    img
                }
            })

            // return entries
            return sanitizedEntries

        }catch(err){
            console.log('Contentful error: ', err);
        }
    }

    return {getGuitars};
};

export default useContentful;