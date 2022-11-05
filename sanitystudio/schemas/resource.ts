
export default {
    name: 'resources',
    title: 'Resources',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'file',
            title: 'File',
            type: 'file',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },  
    ],
    preview: {
        select: {
            title: 'title',
            media: 'file',
        },
    },
};
