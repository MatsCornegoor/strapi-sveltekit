// /** @type {import('./$types').PageLoad} */

// export async function load({ fetch, params }) {
//     const res = await fetch(`/api/items/${params.id}`);
//     const item = await res.json();

//     return { item };
// }

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        post: {
            title: `Title for goes here`,
            content: `Content for goes here`
        }
    };
}