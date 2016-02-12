const items = [
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/f3/53/9b/f3539ba51635b064a5139612345f7915.jpg",
        width: 237,
        height: 239
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/83/e1/82/83e18247abb6879440307aca94e77e6a.jpg",
        width: 237,
        height: 429
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/04/fb/7a/04fb7a14eaf2b2162a3e1b150e9f9131.jpg",
        width: 237,
        height: 355
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/6d/79/f4/6d79f436684a1bd7dbf79c7478113319.jpg",
        width: 237,
        height: 249
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/02/3b/a7/023ba7ba224548a2a2112ad1552c070c.jpg",
        width: 237,
        height: 237
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/dc/38/32/dc38322c256e521c419f652ac89cc476.jpg",
        width: 237,
        height: 505
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/d2/dd/c3/d2ddc3c92d60a326b4227f507a0bb572.jpg",
        width: 237,
        height: 740
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/39/01/60/390160f4a18d0ab81036d03e70ce18c3.jpg",
        width: 237,
        height: 237
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/c1/e3/72/c1e372d92a9d58481ef7fe60d0378424.jpg",
        width: 237,
        height: 315
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/83/cb/6e/83cb6e4a34d98d3f82d7bd23af15752f.jpg",
        width: 237,
        height: 237
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/af/82/bb/af82bb8dd1ced8cb80f4a1caae534996.jpg",
        width: 237,
        height: 315
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/8b/53/8d/8b538dbea071b8a7027a3cd89beb7ccc.jpg",
        width: 237,
        height: 354
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/04/f7/b7/04f7b7ef4c4afc552980ceb3d00e234f.jpg",
        width: 237,
        height: 583
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/4f/c5/f1/4fc5f1dad619269ee68de829d3c9afcd.jpg",
        width: 237,
        height: 330
    },
    {
        url: "https://s-media-cache-ak0.pinimg.com/237x/07/3f/06/073f0641f187ee40cca608a4d83c435c.jpg",
        width: 237,
        height: 255
    },
];

export const defaultProps = {
    columns: 5,
    columnWidth: 200,
    gutter: 5,
    items: items
};

export const skinnyProps = Object.assign({}, defaultProps, {
    columns: 2,
    columnWidth: 100
});

export const fatProps = Object.assign({}, defaultProps, {
    columns: 3,
    columnWidth: 400
});
