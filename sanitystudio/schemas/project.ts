
export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'github',
            title: 'Github',
            type: 'url',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        }
    ],
}