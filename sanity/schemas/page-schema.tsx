const page = {
    name: 'page',
    title: 'pages',
    type: 'document',

    fields: [
        {
            name:'title',
            title: 'Title',
            type: 'string',

        },

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            option: {
                source: 'title',
                maxlenght: 96,
            },

        },

        {
            name: 'contect',
            title: 'Content',
            type: 'array',
            of:[{type: 'block'}],
        },
    ]
}


export default page;