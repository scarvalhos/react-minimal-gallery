import ReactGalleryImages from './ReactGalleryImages';
var Template = function (args) { return (<ReactGalleryImages {...args}/>); };
export var ReactGalleryImagesTemplate = Template.bind({});
ReactGalleryImagesTemplate.args = {
    hoverColor: '#2DC573',
    paginationColor: '#1a1a1a',
    width: '400px',
    thumbnailWidth: '100px',
    images: [
        {
            title: 'Image 01',
            url: 'https://hytzenshop.s3.amazonaws.com/fd3a2052a408a9cafde05ea4c2a23631-camiseta-justice-league-01.webp',
        },
        {
            title: 'Image 02',
            url: 'https://hytzenshop.s3.amazonaws.com/059576149ee92703886bf643b9cce4a9-camiseta-dc-comics-logo-04.png',
        },
        {
            title: 'Image 03',
            url: 'https://hytzenshop.s3.amazonaws.com/76369193225fdfcb9352bd98cd6c047f-camiseta-dc-comics-logo-02.png',
        },
    ],
};
export default {
    title: 'ReactGalleryImages',
    component: ReactGalleryImages,
};
//# sourceMappingURL=ReactGalleryImages.stories.jsx.map